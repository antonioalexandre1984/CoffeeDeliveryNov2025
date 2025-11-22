import { createContext, useState } from "react";

export interface CartItem extends OneCoffee {
	quantity: number;
}

export interface OneCoffee {
	id: number;
	name: string;
	description: string;
	price: number;
	tags: string[];
	photo: string;
}

export interface CartContextType {
	quantity: number;
	cartQuantity: number;
	cartItems: CartItem[];
	cartItemsTotal: number;
	handleIncreaseQuantity: () => void;
	handleDecreaseQuantity: () => void;
	removeCartItem: (id: number) => void;
	formatMoney: (amount: number) => string;
	addCoffeeToCart: (coffee: CartItem) => void;
    handleIncreaseQuantityConfirmationOrder: (id: number) => void;
    handleDecreaseQuantityConfirmationOrder: (id: number) => void;
	changeCartItemQuantity: (id: number,type: "increase" | "decrease"	) => void;
}

interface CartContextProviderProps {
	children: React.ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
	// Estado para armazenar os itens do carrinho
	const [cartItems, setCartItems] = useState<CartItem[]>([]);
	// Estado para controlar a quantidade de um item
	const [quantity, setQuantity] = useState(0);

      /*-------- Função para alterar a quantidade de itens no carrinho da página inicial ------------*/
	function addCoffeeToCart(coffee: CartItem) {
		// Encontra o índice do item no carrinho (se existir)
		const coffeeAlreadyExistsInCartIndex = cartItems.findIndex(
			(item) => item.id === coffee.id
		);

		// Se o café NÃO existe no carrinho (findIndex retorna -1)
		if (coffeeAlreadyExistsInCartIndex < 0) {
			const newCartItem: CartItem = {
				...coffee,
				// A quantidade vem do OneCoffeeCard
				quantity: coffee.quantity,
			};

			// Adiciona o novo item ao final da lista
			setCartItems((prevState) => [...prevState, newCartItem]);

			// Se o café JÁ existe no carrinho (findIndex retorna 0 ou mais)
		} else {
			// Cria um novo array de itens para não mutar o estado diretamente
			const newCartItems = [...cartItems];

			// Atualiza a quantidade do item existente, somando a nova quantidade à antiga
			newCartItems[coffeeAlreadyExistsInCartIndex].quantity += coffee.quantity;

			// Seta o novo array como o novo estado
			setCartItems(newCartItems);
		}
	}

    // Funções para aumentar e diminuir a quantidade
	function handleIncreaseQuantity() {
		setQuantity((state) => {
			const newState = state + 1;
			console.log(`Aumentando para: ${newState}`); // <-- Adicione este log
			return newState;
		});
	}

	// Diminuir a quantidade, garantindo que não fique abaixo de 1
	function handleDecreaseQuantity() {
		setQuantity((state) => {
			const newState = state > 1 ? state - 1 : 1;
			//console.log(`Diminuindo para: ${newState}`); // <-- Adicione este log
			return newState;
		});
	}

	      /*-------- Função para excluir itens do carrinho da página de confirmação------------*/

	function removeCartItem(id: number) {
		const newCartItems = cartItems.filter((item) => item.id !== id);
		setCartItems(newCartItems);
	}


    /*------- Função para alterar a quantidade de itens no carrinho de confirmação ----------*/
	// Função para alterar a quantidade de um item no carrinho
	function changeCartItemQuantity(
		id: number,
		type: "increase" | "decrease"
	) {
		const newCartItems = cartItems.map((item) => {
			if (item.id === id) {
				return {
					...item,
					quantity: type === "increase" ? item.quantity + 1 : item.quantity - 1,
				};
			}
			return item;
		});
		setCartItems(newCartItems.filter(item => item.quantity > 0));
	}

      // Funções para aumentar e diminuir a quantidade
    const handleIncreaseQuantityConfirmationOrder = (id: number) => {
        changeCartItemQuantity(id, "increase");
    };


	// Diminuir a quantidade, garantindo que não fique abaixo de 1
    const handleDecreaseQuantityConfirmationOrder = (id: number) => {
        // A lógica de garantir que não seja menor que 1 ou de remoção já está em changeCartItemQuantity
        changeCartItemQuantity(id, "decrease");
    };


      /*-----------------------------------Função para calcular a quantidade total e o valor total do carrinho---------*/

	// Função para aumentar a quantidade de um item
	const cartQuantity = cartItems.reduce(
		(total, item) => total + item.quantity,
		0
	);

	// Cálculo do total do carrinho
	const cartItemsTotal = cartItems.reduce((total, item) => {
		return total + item.price * item.quantity;
	}, 0);

	

	// Função para formatar o valor monetário para BRL (R$)
	function formatMoney(amount: number): string {
		// Usa a API Intl.NumberFormat para formatar moedas de forma padronizada
		return new Intl.NumberFormat("pt-BR", {
			style: "currency", // Define o estilo como moeda
			currency: "BRL", // Define a moeda como Real Brasileiro
		}).format(amount);
	}

	return (
		<CartContext.Provider
			value={{
				cartItems,
				cartQuantity,
				addCoffeeToCart,
				handleIncreaseQuantity,
				handleDecreaseQuantity,
				quantity,
				formatMoney,
				cartItemsTotal,
				removeCartItem,
				changeCartItemQuantity,
                handleIncreaseQuantityConfirmationOrder,
                handleDecreaseQuantityConfirmationOrder,
			}}>
			{children}
		</CartContext.Provider>
	);
}
