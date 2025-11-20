import { Trash } from "phosphor-react";
import { Button } from "../../../../components/Button";
import { QuantityInput } from "../../../../components/QuantityInput/QuantityInput";
import { RegularText, TitleText } from "../../../../components/Typography";
import { CoffeeCardContainer,RemoveButtonsContainer,PriceFormattedCard } from "./styles";
import americano from "../../../../assets/coffees/americano.png";
export function CoffeeCard() {
	return (
		<CoffeeCardContainer>
            <img src={americano} alt="coffee" />
			{/* CoffeeCard component content */}
				<div>
                    <RegularText>Expresso Tradicional</RegularText>
					<RemoveButtonsContainer>
						<QuantityInput />
						<Button text="REMOVER" icon={<Trash color="purple" size={16} />} />
					</RemoveButtonsContainer>
				</div>
                <PriceFormattedCard>
                    <TitleText size="s">R$ 9,90</TitleText>
                </PriceFormattedCard>
			
		</CoffeeCardContainer>
	);
}
