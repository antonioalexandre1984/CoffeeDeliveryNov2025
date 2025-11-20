import styled, { css } from "styled-components";

interface HeaderButtonProps {
    variant: "purple" | "yellow"
}

export const HeaderContainer = styled.header`
	width: 100%;
	background: ${({ theme }) => theme.colors["base-background"]};
	display: flex;
	align-items: center;
	justify-content: center;
	height: 104px;
	position: sticky;
	top: 0;
	left: 0;
	z-index: 5;

	> div {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	/* --- RESPONSIVIDADE PARA MOBILE --- */
	@media (max-width: 768px) {
		// Empilha os itens (Detalhes e Ilustração) verticalmente
		// Alinha os itens flexíveis ao centro quando empilhados
		align-items: center;
		padding: 0 1rem;
	}
`;

export const HeaderButtonContainer = styled.div`
display: flex;
align-items: center;
gap: 0.75rem;
`

export const HeaderButton = styled.button<HeaderButtonProps>`
display: flex;
align-items: center;
justify-content: center;
border: none;
height: 2.3rem;
min-height: 2.3rem;
border-radius: 6px;
padding: 0 0.5rem;
position: relative;
cursor: pointer;
font-size: ${({theme})=> theme.textSizes["text-regular-s"]};


span{
    position: absolute;
    height: 1.25rem;
    width: 1.25rem;
    border-radius: 50%;
    color: ${({theme})=> theme.colors["base-white"]};
    top: calc(-1.125rem/2);
    right: calc(-1.125rem/2);
    font-size: 0.75rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
}

${({variant,theme})=> css`
    background: ${theme.colors[`brand-${variant}-light`]};
    color: ${theme.colors[`brand-${variant}-dark`]};

    span{
        background: ${theme.colors[`brand-${variant}-dark`]};
    }
`}



`