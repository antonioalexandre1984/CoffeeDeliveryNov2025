import { RegularText, TitleText } from "../../../../components/Typography";
import styled from "styled-components";
import introBackground from '../../../../assets/intro-background.png'
import {rgba} from 'polished' 

export const BannerContainer = styled.section`
width: 100%;
height: 34rem;

background: ${({ theme }) => `url(${introBackground}) no-repeat center,linear-gradient(
    0deg,
    ${theme.colors['base-white']} 0%,
    ${rgba(theme.colors['base-background'], 0.2)} 50%,
    ${theme.colors['base-background']} 100%
)`}; ;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
`

export const BannerContent = styled.div`
	display: flex;
	align-items: top;
	justify-content: space-between;
	gap: 3.5rem;
	

	img {
		width: 476px;
		height: 360px;
	}

	/* ----------------------------------- */
	/* RESPONSIVIDADE MÓVEL       */
	/* ----------------------------------- */
	@media (max-width: 768px) {
        width: 100%;
		display: flex;
        align-items: center;
		margin-top: 20rem;
		// Quando a tela é menor ou igual a 768px, os itens se empilham
		flex-direction: column;

		// Remove ou ajusta o espaçamento lateral se necessário para telas muito pequenas
		gap: 2.5rem;

		// Se a classe "container" já faz isso, pode ser redundante
		padding:1.5rem;
	}
`;

export const BannerIntroTitle = styled(TitleText)`
margin-bottom: 1rem;
font-size: ${({theme})=> theme.textSizes["title-title-xl"]};
text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);

`

export const BannerIntroRegularText = styled(RegularText)`
font-size: ${({theme})=> theme.textSizes["text-regular-l"]};
color:${({theme})=> theme.colors["base-subtitle"]};

`

export const BannerBenefictsContainer = styled.div`
width: 100%;
display: grid;
grid-template-columns: 1fr 1fr;
row-gap: 1.25rem;
margin-top:4.125rem; 

@media (max-width: 768px) {
	margin-bottom: 0;
}
`

export const BenefictsWithIcon = styled.div``
