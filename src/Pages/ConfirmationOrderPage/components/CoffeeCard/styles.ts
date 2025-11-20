import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
	width: 100%; // Ocupa a largura total do container pai
	max-width: 368px;
	display: flex;
	gap: 1rem;
	padding: 1rem;
	//border-radius: 8px;
	align-items: flex-start; /* Alinha os itens no topo, geralmente melhor para layouts horizontais */

	img {
		width: 64px;
		height: 64px;
		flex-shrink: 0; /* Impede que a imagem encolha */
	}

	/* Seletor específico para o div que contém o nome e os botões */
	& > div:nth-of-type(1) {
		display: flex;
		flex-direction: column; /* Organiza o nome e os botões verticalmente */
		justify-content: space-between;
		gap: 1rem;
		flex: 1; /* Permite que este bloco cresça e encolha conforme necessário */
		min-width: 0; /* ESSENCIAL: Permite que o flex container encolha além do tamanho do seu conteúdo */ /* Apenas para visualização durante o desenvolvimento */
	}

	@media (max-width: 768px) {
		// Redução da imagem para economizar espaço
		img {
			width: 50px;
			height: 50px;
		}

		// Se a largura for muito pequena, podemos até reduzir o padding
		padding: 0.5rem;
		gap: 0.75rem;
		border-bottom: 0.15rem solid ${({ theme }) => theme.colors["base-button"]};
	}
`;

export const RemoveButtonsContainer = styled.div`
	display: flex;
	gap: 0.5rem;
	align-items: center;
	margin-top: 0.5rem;
	/* Adiciona flex-shrink: 0 para garantir que os botões não quebrem linha */
	flex-shrink: 0;
`;

export const PriceFormattedCard = styled.div`
	display: flex;
	// O preço deve ficar fixo à direita. Usar margin-left: auto garante que ele fique no final.
	margin-left: auto;
	flex-shrink: 0; /* Impede que o preço desapareça */
	align-items: flex-start;
`;
