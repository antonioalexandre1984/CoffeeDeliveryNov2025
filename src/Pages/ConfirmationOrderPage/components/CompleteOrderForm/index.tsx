import { MapPin, CurrencyDollar } from "phosphor-react";
import { TitleText } from "../../../../components/Typography";
import {
	
	FormSectionContainer,
	CompleteOrderFormContainer,
} from "./styles";
/* import { AddressForm } from "../AddressForm"; */
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { useTheme } from "styled-components";
import { PaymentMethodOptions } from "../PaymentMethodOptions";
import { SimpleTestForm } from "../AddressForm";

export function CompleteOrderForm() {
	const { colors } = useTheme();
	return (
		<CompleteOrderFormContainer>
			<TitleText size="xs">Complete seu pedido</TitleText>
			<FormSectionContainer>
				<SectionTitle
					title="Endereço de Entrega"
					subtitle="Informe o endereço onde deseja receber seu pedido"
					icon={<MapPin color={colors["brand-yellow-dark"]} size={22} />}
				/>
				{/* <AddressForm /> */}
				<SimpleTestForm />
			</FormSectionContainer>

			<FormSectionContainer>
				<SectionTitle
					title="Pagamento"
					subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
					icon={
						<CurrencyDollar color={colors["brand-purple-dark"]} size={22} />
					}
				/>
				<PaymentMethodOptions />
			</FormSectionContainer>
		</CompleteOrderFormContainer>
	);
}
