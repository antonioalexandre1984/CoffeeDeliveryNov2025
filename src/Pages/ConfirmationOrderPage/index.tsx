import {
	CompleteOrderPageContainer,

} from "./styles";
import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { FormProvider, useForm , useFormContext } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
  

/* const PaymentMethods = {
    credit: "credit",
    debit: "debit",
    money: "money"
} as const;
type PaymentMethods = keyof typeof PaymentMethods; */

const confirmOrderFormValidationSchema = zod.object({
	cep: zod.string().min(2, "CEP é obrigatório"),
	street: zod.string().min(1, "Rua é obrigatória"),
	number: zod.string().min(1, "Número é obrigatório"),
	complement: zod.string().optional(),
	district: zod.string().min(1, "Bairro é obrigatório"),
	city: zod.string().min(1, "Cidade é obrigatória"),
	uf: zod.string()                 .min(1, "UF é obrigatório"),
	paymentMethod: zod.enum(["credit", "debit", "money"], {
		message: "Informe o método de pagamento",
	}),
});

export type OrderData  =zod.infer<typeof confirmOrderFormValidationSchema>;
type ConfirmOrderFormData = OrderData
export function CompleteOrderPage() {
    const navigate = useNavigate();
    const confirmOrderForm = useForm<ConfirmOrderFormData>({
        resolver: zodResolver(confirmOrderFormValidationSchema),
        mode: "onChange",
        reValidateMode: "onChange", // <--- ESSENCIAL para a validação SUMIR ao digitar!
        defaultValues: {
            paymentMethod: undefined,
        },
    });

     const { handleSubmit,trigger } = confirmOrderForm;
     // 1. EFEITO DE SINCRONIZAÇÃO: Apenas força o RHF a re-renderizar na montagem.
    // 1. 🚀 EFEITO DE ATIVAÇÃO: Roda na montagem para forçar a validação
    useEffect(() => {
        // Usa `trigger()` sem argumentos para validar TODOS os campos
        // Isso força a leitura dos defaultValues vazios e a ativação dos erros
        trigger(undefined, { shouldFocus: false });
    }, [trigger]);

    function handleConfirmOrder(data: ConfirmOrderFormData) {
        // Lógica de navegação após a validação de sucesso
        navigate("/orderconfirmed", { state: data });
    }

    // 2. FUNÇÃO DE ERRO: Garante que o RHF se sincronize mesmo após uma falha de submissão
    const handleErrors = (errors: any) => {
        console.log("ERROS NA SUBMISSÃO:", errors);
        // Garante que o estado de erro seja exibido imediatamente
        trigger(undefined, { shouldFocus: true });
    };

    return (
        <FormProvider {...confirmOrderForm}>
            <CompleteOrderPageContainer
                className="container"
                // 3. SUBMISSÃO: Usa os dois callbacks (sucesso e erro)
                onSubmit={handleSubmit(handleConfirmOrder, handleErrors)} 
            >
                <CompleteOrderForm />
                <SelectedCoffees />
            </CompleteOrderPageContainer>
        </FormProvider>
    );
}