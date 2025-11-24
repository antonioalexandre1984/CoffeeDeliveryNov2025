import { useFormContext } from "react-hook-form";
/* import { Input } from "../../../../components/Input"; */
import { /* AddressFormContainer, */ ErrorMessage, SimpleInput, TestFormContainer } from "./styles";
/* import type { OrderData } from "../../index"; */

/*export function AddressForm() {
 	const {
		register,
		formState: { errors },
	} = useFormContext<OrderData>(); */
	/* return (
		<AddressFormContainer>
			<div className="cep">
				<Input
					placeholder="CEP"
					type="number"
					{...register("cep")}
					error={errors.cep?.message}
				/>
			</div>
			<div className="street">
				<Input
					placeholder="Rua"
					type="text"
					className="street"
					{...register("street")}
					error={errors.street?.message}
				/>
			</div>

			<div className="number">
				<Input
					placeholder="Número"
					type="number"
					className="number"
					{...register("number")}
					error={errors.number?.message}
				/>
			</div>
			<div className="complement">
				<Input
					placeholder="Complemento"
					className="complement"
					rightText="Opcional"
					{...register("complement")}
					error={errors.complement?.message}
				/>
			</div>
			<div className="district">
				<Input
					placeholder="Bairro"
					className="district"
					{...register("district")}
					error={errors.district?.message}
				/>
			</div>
			<div className="city">
				<Input
					placeholder="Cidade"
					className="city"
					{...register("city")}
					error={errors.city?.message}
				/>
			</div>
			<div className="uf">
				<Input
					placeholder="UF"
					className="uf"
					{...register("uf")}
					error={errors.uf?.message}
				/>
			</div>
		</AddressFormContainer> 
	);
}*/
export function SimpleTestForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  // Garante que o tipo seja string
  const testError = errors.testField?.message as string;

  return (
    <TestFormContainer>
      <h3>🧪 Teste de Validação RHF (Isolado)</h3>
      <SimpleInput
        placeholder="Campo de Teste"
        type="text"
        $hasError={!!testError}
        // O nome do campo deve existir no schema principal
        {...register('testField')}
      />
      {testError && <ErrorMessage>{testError}</ErrorMessage>}
      <p style={{ fontSize: '0.8rem', color: 'gray' }}>
        Se este campo ficar vermelho e exibir o erro no primeiro clique, o problema está
        nos seus componentes `AddressForm` / `Input`.
      </p>
    </TestFormContainer>
  );
}