import {
	CompleteOrderPageContainer,
	/* 	ErrorMessage,
	SimpleInput,
	TestFormContainer, */
} from "./styles";
import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { FormProvider, useForm /* , useFormContext  */ } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
/* import { useNavigate } from "react-router-dom"; */
import { SimpleTestForm } from "./components/AddressForm";
import { useEffect } from "react";

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
	uf: zod.string().min(1, "UF é obrigatório"),
	testField: zod.string().min(5, "Teste: Mínimo de 5 caracteres"),
	paymentMethod: zod.enum(["credit", "debit", "money"], {
		message: "Informe o método de pagamento",
	}),
});

export type OrderData  =zod.infer<typeof confirmOrderFormValidationSchema>;
type ConfirmOrderFormData = OrderData
export function CompleteOrderPage() {
    const confirmOrderForm = useForm<ConfirmOrderFormData>({
        resolver: zodResolver(confirmOrderFormValidationSchema),
        mode: "onBlur",
        reValidateMode: "onChange", // <--- ESSENCIAL para a validação SUMIR ao digitar!
        defaultValues: {
            paymentMethod: undefined,
        },
    });

    const { handleSubmit, trigger ,setError} = confirmOrderForm;

// 1. EFEITO DE SINCRONIZAÇÃO: Força o RHF a ativar a validação e, crucialmente, SINALIZA o erro
    useEffect(() => {
        // Força a validação de campos chaves
        trigger("testField");
        
        // 🚨 O PULO DO GATO: Forçar o RHF a registrar o erro de forma manual e síncrona:
        setError("testField", {
            type: "manual",
            message: "Teste: Mínimo de 5 caracteres",
        });
        setError("testField", {
            type: "manual",
            message: "CEP é obrigatório",
        });

    }, [trigger, setError]); // Adicione setError às dependências

    function handleConfirmOrder(data: ConfirmOrderFormData) {
        // ... Lógica de sucesso (navegação)
        console.log("Pedido confirmado:", data);
    }

    // 2. FUNÇÃO DE ERRO: Garante que o RHF re-renderize após a falha de submissão.
    const handleErrors = (errors: any) => {
        console.log("ERROS NA SUBMISSÃO:", errors);
        // O trigger aqui corrige a sincronia no clique, caso o useEffect falhe.
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

                {/* Componente de Teste */}
                <SimpleTestForm /> 
            </CompleteOrderPageContainer>
        </FormProvider>
    );
}

