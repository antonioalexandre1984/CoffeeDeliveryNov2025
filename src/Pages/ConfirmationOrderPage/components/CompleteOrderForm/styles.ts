import styled from "styled-components";

export const CompleteOrderFormContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	width: 100%;
	max-width: 40rem;

	/* ----------------------------------- */
	/* RESPONSIVIDADE MÓVEL       */
	/* ----------------------------------- */
	@media (max-width: 368px) {
		// Quando a tela é menor ou igual a 768px, os itens se empilham

		// Remove ou ajusta o espaçamento lateral se necessário para telas muito pequenas
		//gap: 1.5rem;

		// Se a classe "container" já faz isso, pode ser redundante
		margin: 2rem;
	
	}
	//min-height: 23.25rem;
`;
export const FormSectionContainer = styled.div`
	display: flex;
	flex-direction: column;

	/* 📱 Mobile */
	gap: 0.5rem; /* espaçamento menor */
	background: ${({ theme }) => theme.colors["base-card"]};
	border-radius: 6px;
	padding: 1rem; /* padding reduzido no mobile */

	/* 💻 Desktop */
	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		gap: 2rem; /* volta espaçamento original */
		padding: 2.5rem; /* padding original */
	}
`;