import styled from "styled-components";

export const AllCoffeeContainer = styled.div`
	width: 100%;
	margin-top: 2rem;
	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		padding-top: 25rem;
		
	}
`;


export const AllCoffeeList = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 2rem;
	row-gap: 4rem;
	margin-top: 3.5rem;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		padding-top: 10rem;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		margin: 0.50rem;
		gap: 1rem;
		row-gap: 4rem;
		column-gap: 0.5rem;
		margin: 1rem auto;
	}
`;