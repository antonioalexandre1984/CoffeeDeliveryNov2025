import { Trash } from "phosphor-react";
import { Button } from "../../../../components/Button"; 

import { RegularText } from "../../../../components/Typography";
import {
	CoffeeCardContainer,
	ActionsContainer,
	PriceFormattedCard,
} from "./styles";
import { useCart } from "../../../../hooks/useCart";
import type { CartItem } from "../../../../contexts/CartContext";
import { QuantityInput } from "../../../../components/QuantityInput";

interface CoffeeCardProps {
	coffee: CartItem
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
	const {
		handleIncreaseQuantityConfirmationOrder,
		handleDecreaseQuantityConfirmationOrder,
		formatMoney,
		cartQuantity,
	} = useCart();


	const priceFormatted = formatMoney(coffee.price);

	return (
		<CoffeeCardContainer>
				<img src={coffee.photo} alt="coffee" />
				{/* CoffeeCard component content */}
				<div>
					<RegularText>{coffee.name}</RegularText>
					<ActionsContainer>
						<QuantityInput
							quantity={coffee.quantity}
							onIncrease={() =>
								handleIncreaseQuantityConfirmationOrder(coffee.id)
							}
							onDecrease={() =>
								handleDecreaseQuantityConfirmationOrder(coffee.id)
							}
						/>
						<Button text="REMOVER" icon={<Trash color="purple" size={16} />} />
					</ActionsContainer>
				</div>
				<PriceFormattedCard>
					<RegularText size="s">
						{cartQuantity} X {priceFormatted}
					</RegularText>
				</PriceFormattedCard>
		</CoffeeCardContainer>
	);
}
