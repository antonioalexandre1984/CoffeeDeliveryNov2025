import {
	CompleteOrderPageContainer,

} from "./styles";
import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { FormProvider, useForm /* , useFormContext */ } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
/* import { useEffect } from "react"; */
import { useNavigate } from "react-router-dom"; 
import { useCart } from "../../hooks/useCart";
  

/* const PaymentMethods = {
    credit: "credit",
    debit: "debit",
    money: "money"
} as const;
type PaymentMethods = keyof typeof PaymentMethods; */

const confirmOrderFormValidationSchema = zod.object({
	cep: zod.string().min(8, "CEP é obrigatório"),
	street: zod.string().min(5, "Rua é obrigatória"),
	number: zod.string().min(5, "Número é obrigatório"),
	complement: zod.string().optional(),
	district: zod.string().min(6, "Bairro é obrigatório"),
	city: zod.string().min(6, "Cidade é obrigatória"),
	uf: zod.string().min(2, "UF é obrigatório"),
	paymentMethod: zod.enum(["credit", "debit", "money"], {
		message: "Informe o método de pagamento",
	}),
});

export type OrderData  =zod.infer<typeof confirmOrderFormValidationSchema>;
type ConfirmOrderFormData = OrderData
export function CompleteOrderPage() {
    // ... (navigate e cleanCart, se aplicável)
    const navigate = useNavigate();
    const { cleanCart } = useCart();
    
    const confirmOrderForm = useForm<ConfirmOrderFormData>({
        resolver: zodResolver(confirmOrderFormValidationSchema),
        
        // Use onChange para que os erros sumam à medida que o usuário digita
           // mode: "all", 
        reValidateMode: "onChange", 
        
        defaultValues: {
            paymentMethod: undefined,
            cep: '', 
            street: '',
            number: '',
            complement: '', // Opcional
            district: '',
            city: '',
            uf: '',
            // Garanta que todos os campos de endereço estejam vazios (string vazia)
        },
    });

    const { handleSubmit/* , trigger  */} = confirmOrderForm;

    // 🚨 PASSO CHAVE: Forçar a validação na montagem
   /*  useEffect(() => {
        // O 'trigger(undefined)' força a execução do ZodResolver em todos os campos
        // Isso fará com que os defaultValues vazios gerem erros, que serão exibidos
        trigger(undefined, { shouldFocus: false });
    }, [trigger]); */

    function handleConfirmOrder(data: ConfirmOrderFormData) {
        // ... Lógica de sucesso
        console.log("Pedido confirmado:", data);
        navigate('/orderconfirmed',{
            state:data,
        })
        console.log(data);
        cleanCart();
    }

    const handleErrors = (errors: any) => {
        console.log("ERROS NA SUBMISSÃO:", errors);
        // Garante que o estado de erro seja exibido imediatamente
        //trigger(undefined, { shouldFocus: true });
    };

    return (
        <FormProvider {...confirmOrderForm}>
                
            <CompleteOrderPageContainer
                // ...
                
                onSubmit={handleSubmit(handleConfirmOrder, handleErrors)} 
            >
                <div className="container">    
                <CompleteOrderForm/>
                <SelectedCoffees/>
                {/* ... (Seu formulário e cafés) */}
                </div>
            </CompleteOrderPageContainer>
        </FormProvider>
    );
}