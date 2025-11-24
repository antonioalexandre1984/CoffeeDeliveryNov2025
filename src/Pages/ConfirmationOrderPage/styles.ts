import styled from "styled-components";

export const CompleteOrderPageContainer = styled.form`
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