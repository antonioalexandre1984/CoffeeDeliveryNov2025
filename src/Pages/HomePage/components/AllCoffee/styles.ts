import styled from "styled-components";

export const AllCoffeeContainer = styled.div`
	width: 100%;
	margin-top: 2rem;

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		img{
			width: 50%;
			height: 50%;
		}
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		margin-bottom: 10rem;
		margin-right: 1rem;
		margin-right: auto;
	}
	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		margin-bottom: 10rem;
		margin-right: 1rem;
		margin-right: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
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
		padding-top: 4rem;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
		row-gap: 4rem;
		column-gap: 0.5rem;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		padding-top: 2rem;
		//display: grid;
		//grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
		row-gap: 4rem;
		column-gap: 0.5rem;
		//padding-bottom: 10rem;
	}
`;