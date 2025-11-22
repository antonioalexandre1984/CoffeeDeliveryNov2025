import { styled } from "styled-components";

export const ButtonContainer = styled.button.attrs({
    type: 'button',
})`
   display: flex;
   gap: 0.25rem;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    background-color: ${({ theme }) => theme.colors['base-button']};
    color: ${({ theme }) => theme.colors['base-text']}; 
    border: none;
    border-radius: 6px;
    font-size: 0.75rem;
    text-transform: uppercase;
`;