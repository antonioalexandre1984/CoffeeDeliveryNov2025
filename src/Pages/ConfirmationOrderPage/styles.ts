import { RegularText, TitleText } from "../../components/Typography";
import styled from "styled-components";
import introBackground from "../../assets/BannerBackground.png";
import { rgba } from "polished";

// ----------------------------------------------------
// BANNER CONTAINER
// ----------------------------------------------------

export const CompleteOrderPageContainer = styled.section`
	width: 100%;
	/* Mobile-First: Uma altura maior para comportar o conteúdo empilhado */
	height: auto;
	padding-top: 4rem; /* Garante espaço no topo */
	padding-bottom: 4rem; /* Garante espaço na base */

	background: ${({
		theme,
	}) => `url(${introBackground}) no-repeat center, linear-gradient(
    0deg,
    ${theme.colors["base-white"]} 0%,
    ${rgba(theme.colors["base-background"], 0.2)} 50%,
    ${theme.colors["base-background"]} 100%
  )`};
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;

	/* Desktop/Tablet (md) - Estilo original */
	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		height: 34rem; /* Altura fixa no desktop */
		padding: 0;
	}
`;

// ----------------------------------------------------
// BANNER CONTENT
// ----------------------------------------------------

export const BannerContent = styled.div`
	/* MOBILE-FIRST (Padrão para telas < 768px) */
	width: 100%;
	padding: 0 1.5rem; /* Padding lateral para celular */
	display: flex;
	flex-direction: column; /* Conteúdo empilhado no mobile */
	align-items: center;
	gap: 2.5rem; /* Espaçamento entre os blocos (título e imagem) */

	img {
		width: 100%; /* Imagem preenche a largura no mobile */
		max-width: 300px; /* Limita o tamanho máximo da imagem */
		height: auto;
	}

	/*
    DESKTOP/TABLET (md) - >= 768px
    Volta ao layout de duas colunas (row)
  */
	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		max-width: 1120px; /* Largura máxima do container */
		flex-direction: row; /* Coloca lado a lado */
		align-items: center;
		justify-content: space-between;
		gap: 3.5rem;
		padding: 0;

		img {
			width: 476px; /* Tamanho original da imagem */
			height: 360px;
			max-width: none;
		}
	}
`;

// ----------------------------------------------------
// BANNER INTRO TEXTS
// ----------------------------------------------------

export const BannerIntroTitle = styled(TitleText)`
	margin-bottom: 1rem;
	/* Ajuste de fonte para Mobile (menor) */
	font-size: ${({ theme }) => theme.textSizes["title-title-l"]};
	text-align: center; /* Centraliza o texto no mobile */
	text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);

	/* Desktop (md) - Retorna ao tamanho maior e alinhamento à esquerda */
	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		font-size: ${({ theme }) => theme.textSizes["title-title-xl"]};
		text-align: left;
	}
`;

export const BannerIntroRegularText = styled(RegularText)`
	font-size: ${({ theme }) => theme.textSizes["text-regular-l"]};
	color: ${({ theme }) => theme.colors["base-subtitle"]};
	text-align: center; /* Centraliza o texto no mobile */

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		text-align: left;
	}
`;

// ----------------------------------------------------
// BENEFÍCIOS CONTAINER
// ----------------------------------------------------

export const BannerBenefictsContainer = styled.div`
	width: 100%;
	display: grid;
	/* MOBILE-FIRST: Coloca em uma única coluna no mobile */
	grid-template-columns: 1fr;
	row-gap: 1.25rem;
	margin-top: 2.5rem; /* Margem ajustada para mobile */
	margin-bottom: 0;

	/* DESKTOP/TABLET (md) - >= 768px */
	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		grid-template-columns: 1fr 1fr; /* Duas colunas */
		margin-top: 4.125rem;
	}
`;

export const BenefictsWithIcon = styled.div``;
