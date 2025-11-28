import styled from "styled-components";

export const AllCoffeeContainer = styled.div`
	width: 100%;
	margin-top: 2rem;
	/* Padding lateral padrão, assumindo que este arquivo está dentro de um container com padding */
	padding: 0 1.5rem;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		padding-top: 5rem;
	}

	/* 🚨 1. Espaçamento lateral de 1rem para telas < 400px 🚨 */
	@media (max-width: 400px) {
		padding: 0 1rem;
		justify-content: center;
		text-align: center;
	}
`;

export const AllCoffeeList = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 2rem;
	row-gap: 4rem;
	margin-top: 3.5rem;

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 0.25rem;
		row-gap: 2rem;
		column-gap: 0.5rem;
		margin-left: 0;
	}

	/* 🚨 2. Ajuste de grid para telas < 400px 🚨 */
	@media (max-width: 400px) {
		/* Mantém 2 colunas, mas reduz o espaçamento entre elas */
		grid-template-columns: repeat(2, 1fr);
		column-gap: 0.5rem;
		row-gap: 3rem;
		text-align: center;
		padding-bottom: 5rem;
	}
`;
