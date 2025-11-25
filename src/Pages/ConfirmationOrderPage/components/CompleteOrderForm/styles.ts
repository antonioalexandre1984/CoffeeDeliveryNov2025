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
	@media (max-width: 768px) {
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
	gap: 2rem;
	//width: 100%;
	background: ${({ theme }) => theme.colors["base-card"]};
	border-radius: 6px;
	padding: 2.5rem;

`;