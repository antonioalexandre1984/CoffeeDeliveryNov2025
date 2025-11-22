import {
	OneCoffeeCardContainer,
	Tag,
	Description,
	OneCoffeeCardFooter,
	ButtonAddCart,
} from "./styles";
import { RegularText, TitleText } from "../../../../components/Typography";
import { ShoppingCart } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import type { OneCoffee } from "../../../../contexts/CartContext";
import { useState } from "react";


interface OneCoffeeCardProps {
	coffee: OneCoffee;
}

export function OneCoffeeCard({ coffee }: OneCoffeeCardProps) {
	// Contexto para adicionar ao carrinho

	const { addCoffeeToCart} = useCart();
	// Estado para controlar a quantidade do café a ser adicionada


	const [quantity, setQuantity] = useState(1);
	// Função para lidar com o clique no botão de adicionar ao carrinho

	// Formatação do preço do café
	const formattedPrice = formatMoney(coffee.price);
	function handleAddToCart() {
		const coffeeToAdd = {
			...coffee,
			quantity,
		};
        console.log(`Quantidade de ${coffee.name} adicionada: ${quantity}`);
		addCoffeeToCart(coffeeToAdd);
	} 

	function handleIncreaseQuantity() {
        setQuantity(state => state + 1);
    }
    function handleDecreaseQuantity() {
        // Garante que não diminui abaixo de 1
        setQuantity(state => (state > 1 ? state - 1 : 1));
    }

	return (
		<OneCoffeeCardContainer>
			<img src={coffee.photo} />
			<Tag>
				{coffee.tags.map((tag) => (
					<span key={`${coffee.id}${tag}`}>{tag}</span>
				))}
			</Tag>
			<TitleText size="s" color="subtitle">
				{coffee.name}
			</TitleText>
			<Description size="s">{coffee.description}</Description>
			<OneCoffeeCardFooter>
				<RegularText>R$</RegularText>
				<TitleText size="m">{formattedPrice}</TitleText>
				<QuantityInput
					quantity={quantity}
					onIncrease={handleIncreaseQuantity}
					onDecrease={handleDecreaseQuantity}
				/>
				
				<ButtonAddCart onClick={handleAddToCart}>
					<ShoppingCart size={22} weight="fill" />
				</ButtonAddCart>
		
			</OneCoffeeCardFooter>
		</OneCoffeeCardContainer>
	);
}
