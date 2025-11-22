import styled from "styled-components";

export const CompleteOrderPageContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	gap: 2rem;
	margin-top: 2.5rem;

	/* ----------------------------------- */
	/* RESPONSIVIDADE MÓVEL       */
	/* ----------------------------------- */
	@media (max-width: 768px) {
		// Quando a tela é menor ou igual a 768px, os itens se empilham
		flex-direction: column;

		// Remove ou ajusta o espaçamento lateral se necessário para telas muito pequenas
		gap: 1.5rem;

		// Se a classe "container" já faz isso, pode ser redundante
		padding: 0 1rem;
	}
`;
