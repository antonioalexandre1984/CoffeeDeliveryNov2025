import styled from "styled-components";

export const AddressFormContainer = styled.div`
	width: 100%;
	min-height: 14rem;
	max-width: 35rem;
	display: grid;
	flex-direction: column;
	// Definimos 6 colunas iguais (1fr) para facilitar as proporções de 1/3 e 2/3
	grid-template-columns: repeat(3, 1fr);
	column-gap: 0.75rem;
	row-gap: 1rem;
	//grid-auto-flow: dense;

	// 1ª Linha: CEP (1/3) + Rua (100% - Inicia na 3ª coluna, que é onde o CEP termina)
	.cep {
		// Ocupa 1/3 da linha = 2 de 6 colunas
		grid-column: span 1;
	}

	.street {
		// Começa após o CEP (coluna 3) e ocupa o restante (4 colunas)
		// Requisito: "seguido do campo rua com 100% da largura de linha"
		// Este requisito é um pouco ambíguo. Assumindo que você quer ele após o CEP na mesma linha,
		// o grid-column: 3 / span 4 faria ele ocupar as 4 colunas restantes.
		// Se você quer que ele OCUPE 100% DA LINHA, ele deve estar em uma linha própria
		// e ocupar 6 colunas.
		// Vamos separar o CEP e a Rua em linhas diferentes para que a Rua tenha 100% da largura
		// conforme a interpretação mais literal.

		// Mantenho a estrutura que você forneceu, colocando todos os Inputs um após o outro,
		// e faço a Rua ocupar a linha inteira, movendo-a para a segunda linha.
		grid-column: span 6; // Ocupa 100% da largura da linha (6 colunas)
	}

	// 2ª Linha (após a Rua): Número (1/3) + Complemento (Restante = 2/3)
	.number {
		// Ocupa 1/3 da linha = 2 de 6 colunas
		grid-column: span 1;
	}

	.complement {
		// Ocupa o restante = 2/3 da linha = 4 de 6 colunas
		grid-column: span 5;
	}

	// 3ª Linha (após o Complemento): Bairro
	// Não foi mencionado, mas por padrão ocupará o espaço disponível (grid-auto-flow)

	.district {
		grid-column: span 1; // Ocupa 100% da largura da linha
	}
	// 4ª Linha: Cidade (2/3) + UF (Restante = 1/3)
	.city {
		// Ocupa 2/3 da linha = 4 de 6 colunas
		grid-column: span 4;
	}

	.uf {
		// Ocupa o restante = 1/3 da linha = 2 de 6 colunas
		grid-column: span 1;
	}

	/* ---------- RESPONSIVIDADE ---------- */
	@media (max-width: 768px) {
		// ... (Seu código de responsividade permanece o mesmo, ajustado para 1 coluna)
		grid-template-columns: 1fr;

		.cep,
		.street,
		.number,
		.complement,
		.district,
		.city,
		.uf {
			grid-column: 1 / span 1 !important;
		}
	}
`;
