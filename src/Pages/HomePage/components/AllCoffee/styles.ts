import styled from "styled-components";

export const AllCoffeeContainer = styled.div`
	width: 100%;
	margin-top: 2rem;
	@media (max-width: 768px) {
		margin-top: 20rem;
		h1{
			display: flex;
			justify-content: center;
		}
	}
`;


export const AllCoffeeList = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 2rem;
	row-gap: 4rem;
	margin-top: 3.5rem;

	@media (max-width: 768px) {


		grid-template-columns: 2 4fr;
		padding: 2rem;
	}
`;