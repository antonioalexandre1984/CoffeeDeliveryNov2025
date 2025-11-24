import styled from "styled-components";

export const AddressFormContainer = styled.div`
	width: 100%;
	min-height: 14rem;
	max-width: 35rem;
	display: grid;
	flex-direction: column;

	// CORREÇÃO AQUI: Definimos 6 colunas para que as proporções 1/3 (span 2) e 2/3 (span 4) funcionem.
	grid-template-columns: repeat(6, 1fr);
	column-gap: 0.75rem;
	row-gap: 1rem;

	// Linha 1: CEP (1/3)
	.cep {
		// CORREÇÃO: Para ocupar 1/3, ele deve ocupar 2 colunas (2/6 = 1/3)
		grid-column: span 2;
	}

	// Linha 2: Rua (100% da linha)
	.street {
		// CORREÇÃO: Para ocupar 100% da linha
		grid-column: span 6;
	}

	// Linha 3: Número (1/3) + Complemento (2/3)
	.number {
		// CORREÇÃO: Ocupa 1/3 (2 de 6 colunas)
		grid-column: span 2;
	}

	.complement {
		// CORREÇÃO: Ocupa o restante 2/3 (4 de 6 colunas)
		grid-column: span 4;
	}

	// Linha 4: Bairro (1/3) + Cidade (1/3) + UF (1/3)
	.district {
		// CORREÇÃO: Ocupa 1/3 (2 de 6 colunas)
		grid-column: span 2;
	}

	.city {
		// CORREÇÃO: Ocupa 1/3 (2 de 6 colunas)
		grid-column: span 2;
	}

	.uf {
		// CORREÇÃO: Ocupa 1/3 (2 de 6 colunas)
		grid-column: span 2;
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


// Estilo para o texto de erro (simula o seu componente de tipografia de erro)
export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.75rem;
  margin-top: 0.25rem;
  font-style: italic;
  font-weight: bold;
`;

// O Input de teste estilizado
export const SimpleInput = styled.input<{ $hasError: boolean }>`
  padding: 0.75rem;
  border: 1px solid
    ${({ $hasError }) => ($hasError ? 'red' : 'lightgray')};
  border-radius: 4px;
  width: 100%;
  transition: border-color 0.4s;

  &:focus {
    border-color: black;
  }
`;

// Contêiner isolado para visualização
export const TestFormContainer = styled.div`
  border: 2px dashed #0099ff; /* Borda azul para destaque */
  padding: 1rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  max-width: 35rem;
  margin-left: auto;
  margin-right: auto;
`;