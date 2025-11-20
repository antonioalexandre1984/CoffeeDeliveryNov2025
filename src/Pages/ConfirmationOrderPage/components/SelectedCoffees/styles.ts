import styled from "styled-components";

export const SelectedCoffeesContainer = styled.div`
	/* styles for SelectedCoffees component */
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	max-width: 40rem;
	width: 100%;

	@media (max-width: 768px) {
		// Adiciona padding de 0 no topo/baixo e 1rem nas laterais.
		// Se você já tem padding no ConfirmationOrderPageContainer, isso pode ser redundante/duplicado.
		padding: 0 1rem;

	}
`;

export const SelectedCoffeeDetails = styled.div`
	/* styles for SelectedCoffeeDetails component */
	display: flex;
	flex-direction: column;
	border-radius: 6px 44px 6px 44px;
	background-color: ${({ theme }) => theme.colors["base-card"]};
	padding: 1.5rem;

	@media (max-width: 768px) {
		// Adiciona padding de 0 no topo/baixo e 1rem nas laterais.
		// Se você já tem padding no ConfirmationOrderPageContainer, isso pode ser redundante/duplicado.

	
	}
`;