import styled from "styled-components";

export const PaymentMethodOptionsContainer = styled.div`
	width: 100%;

	// CORREÇÃO: O contêiner principal deve ser uma coluna
	display: flex;
	flex-direction: column;
	gap: 0.5rem; /* Adiciona espaçamento entre as opções e o erro */

	/* Novo estilo para o wrapper das opções */
	.options-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.75rem;
	}

	/* Estilos do parágrafo de erro */
	p {
		color: ${({ theme }) => theme.colors["base-error"]};
		font-size: 0.75rem;
		font-style: italic;
		font-weight: bold;
		// Ajuste o alinhamento do texto de erro
		align-self: flex-start;
		padding-left: 0.2rem;
	}

	/* ----------------------------------- */
	/* RESPONSIVIDADE MÓVEL */
	/* ----------------------------------- */
	@media (max-width: 768px) {
		/* Garante que o wrapper de opções mude para coluna no mobile */
		.options-wrapper {
			display: flex;
			flex-direction: column;
		}
	}
`;