import styled, { css } from "styled-components";

interface InputStyleContainerProps {
	$hasError: boolean;
}
export const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.3rem;
	position: relative;

	> p {
		color: ${({ theme }) => theme.colors["base-error"]};
	}
`;

export const InputStyleContainer = styled.div<InputStyleContainerProps>`
    height: 2.625rem;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors["base-input"]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: 0.4s;
    overflow: hidden;

    /* 🚨 CORREÇÃO ESSENCIAL: UNIFICAR A LÓGICA DA BORDA */
    border: 1px solid 
        ${({ theme, $hasError }) =>
            $hasError ? theme.colors["base-error"] : theme.colors["base-button"]
        }; 

    &:focus-within {
        /* Garante que o foco amarelo sobrescreva a cor base, mas não a cor de erro */
        border-color: ${({ theme, $hasError }) =>
            $hasError ? theme.colors["base-error"] : theme.colors["brand-yellow-dark"]
        };
    }
 
`;

export const InputStyled = styled.input`
	flex: 1;
	height: 100%;
	background: none;
	border: none;
	color: ${({ theme }) => theme.colors["base-text"]};
	font-size: 0.75rem;
	padding: 0 0.75rem;
	outline: none;

	&::placeholder {
		color: ${({ theme }) => theme.colors["base-label"]};
	}
`;

export const RightText = styled.p`
	font-size: 0.75rem;
	margin-right: 0.75rem;
	font-style: italic;
	color: ${({ theme }) => theme.colors["base-label"]};
`;
