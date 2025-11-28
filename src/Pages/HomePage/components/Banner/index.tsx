import {
	BannerContainer,
	BannerContent,
	BannerIntroTitle,
	BannerIntroRegularText,
	BannerBenefictsContainer,
} from "./styles";
import CupCoffee from "../../../../assets/CupCoffee.svg";
import { BenefictsWithIcon } from "../../../../components/BenefictsWithIcon";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { useTheme } from "styled-components";
export function Banner() {
	const { colors } = useTheme();
	return (
		<BannerContainer>
			<BannerContent className="container">
				<section className="">
					<BannerIntroTitle size="xl">
						Encontre o café perfeito 
						para qualquer hora do dia
					</BannerIntroTitle>
					<BannerIntroRegularText size="l">
						Com o Coffee Delivery você recebe seu café onde estiver, a 
						qualquer hora.
					</BannerIntroRegularText>

					<BannerBenefictsContainer>
						<BenefictsWithIcon
							iconBg={colors["brand-yellow-dark"]}
							icon={<ShoppingCart weight="fill" />}
							text="Compra simples e segura"
							title={""}
						/>
						<BenefictsWithIcon
							iconBg={colors["base-text"]}
							icon={<Package weight="fill" />}
							text="Embalagem mantém o café intacto"
							title={""}
						/>
						<BenefictsWithIcon
							iconBg={colors["brand-yellow"]}
							icon={<Timer weight="fill" />}
							text="Entrega rápida e rastreada"
							title={""}
						/>
						<BenefictsWithIcon
							iconBg={colors["brand-purple-dark"]}
							icon={<Coffee weight="fill" />}
							text="O café chega fresquinho até você"
							title={""}
						/>
					</BannerBenefictsContainer>
				</section>
				<img src={CupCoffee} alt="copo de café" />
			</BannerContent>
		</BannerContainer>
	);
}
