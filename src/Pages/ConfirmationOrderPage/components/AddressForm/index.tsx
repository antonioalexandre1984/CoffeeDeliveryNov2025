import { useFormContext } from "react-hook-form";
import { Input } from "../../../../components/Input"; 
import { AddressFormContainer } from "./styles"; 
/* import type { OrderData } from "../../index";  */
interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    }
  }
}
export function AddressForm() {
  const { register, formState } = useFormContext();

  const { errors } = formState as unknown as ErrorsType;
	 return (
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
}
