import styled from "styled-components"

interface IconContainerProps{
    $iconBg: string;
}


export const BenefictsWithIconContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.75rem;
	font-size: ${({ theme }) => theme.textSizes["text-regular-m"]};
	width: 100%;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		width: 100%;
		//display: flex;
		//align-items: center;
		// Quando a tela é menor ou igual a 768px, os itens se empilham
		//flex-direction: column;
		// Remove ou ajusta o espaçamento lateral se necessário para telas muito pequenas
		gap: 2.5rem;
		// Se a classe "container" já faz isso, pode ser redundante
		//padding: 1.5rem;
		font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};

        }
`;

export const IconContainer = styled.div<IconContainerProps>`
width: 32px;
height: 32px;
border-radius: 50%;

background: ${({$iconBg})=> $iconBg};
color: ${({theme})=> theme.colors["base-white"]};
display: flex;
align-items: center;
justify-content: center;
`


export const InfoContainer = styled.div`
`


