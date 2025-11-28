import styled from "styled-components";

export const DefaultLayoutContainer = styled.div`
	.container {
		width: 100%;
		max-width: 70rem;
		margin-left: auto;
		margin-right: auto;
	}

	/* ----------------------------------- */
	/* RESPONSIVIDADE MÓVEL       */
	/* ----------------------------------- */
	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		width: 100%;
		padding: 1.5rem;
		scroll-behavior: auto;
	}
`;