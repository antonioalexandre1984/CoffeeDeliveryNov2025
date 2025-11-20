import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { BenefictsWithIcon } from "../../components/BenefictsWithIcon";
import { RegularText, TitleText } from "../../components/Typography";
import {
	OrderConfimedPageContainer,
	OrderConfimedContent,
	OrderConfimedDetails,
} from "./styles";
import { useTheme } from "styled-components";
import Illustration from '../../assets/Illustration.svg'

export function OrderConfimedPage() {
        const { colors } = useTheme();
	return (
		<OrderConfimedPageContainer className="container">
			<TitleText>Uhu!Pedido Confirmado</TitleText>
			<RegularText>
				Agora é só aguardar que logo o café chegará até você
			</RegularText>
			<OrderConfimedContent>
            
				{/* Conteúdo da página de confirmação de pedido */}
				<OrderConfimedDetails>
					<BenefictsWithIcon
						iconBg={colors["brand-purple"]}
						icon={<MapPin weight="fill" />}
						text={<RegularText size="s">Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                                <br/>Bairro Centro - São Paulo, SP</RegularText>}
						title={""}
					/>
					<BenefictsWithIcon
						iconBg={colors["brand-yellow"]}
						icon={<Timer weight="fill" />}
						text={<RegularText size="s">Previsão de entrega<br/>
                        <strong>20 min - 30 min</strong></RegularText>}
						title={""}
					/>
					<BenefictsWithIcon
						iconBg={colors["brand-yellow-dark"]}
						icon={<CurrencyDollar weight="fill" />}
						text={<RegularText size="s">Pagamento na entrega<br/>
                        <strong>Cartão de Crédito</strong></RegularText>}
						title={""}
					/>
				</OrderConfimedDetails>
                    <img src={Illustration} alt="Ilustração de pedido confirmado"/>
			</OrderConfimedContent>
		</OrderConfimedPageContainer>
	);
}
