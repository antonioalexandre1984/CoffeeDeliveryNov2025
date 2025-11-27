import { RegularText, TitleText } from "../../../../components/Typography";
import styled from "styled-components";
import introBackground from "../../../../assets/BannerBackground.png";
import { rgba } from "polished";

// ----------------------------------------------------
// 1. BANNER CONTAINER
// ----------------------------------------------------

export const BannerContainer = styled.section`
	width: 100%;
	/* MOBILE-FIRST: Altura auto e padding para se adaptar ao conteúdo empilhado */
	height: auto;
	padding: 4rem 0;

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

	/* Desktop/Tablet (md) - >= 768px: Estilo original fixo */
	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		height: 34rem;
		padding: 0;
	}
`;

// ----------------------------------------------------
// 2. BANNER CONTENT
// ----------------------------------------------------

export const BannerContent = styled.div`
	/* MOBILE-FIRST (Padrão para telas < 768px) */
	width: 100%;
	padding: 0 1.5rem; /* Padding lateral para telas pequenas */
	display: flex;
	flex-direction: column; /* Conteúdo empilhado: Texto em cima, Imagem embaixo */
	align-items: center; /* Centraliza itens */
	gap: 2.5rem;

	/* Ajuste para o conteúdo do CupCoffee */
	img {
		width: 100%; /* Imagem preenche a largura no mobile */
		max-width: 300px; /* Limita o tamanho máximo */
		height: auto;
	}

	/*
    Desktop/Tablet (md) - >= 768px
    Retorna ao layout original de duas colunas (row)
  */
	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		max-width: 1120px; /* Limita a largura principal (baseado na sua classe 'container') */
		flex-direction: row; /* Coloca lado a lado */
		align-items: center; /* Alinha no meio (ou 'top' se preferir) */
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
// 3. BANNER INTRO TEXTS
// ----------------------------------------------------

export const BannerIntroTitle = styled(TitleText)`
	margin-bottom: 1rem;
	/* MOBILE-FIRST: Usa um tamanho de fonte menor e centraliza o texto */
	//font-size: ${({ theme }) => theme.textSizes["title-title-xl"]};
	text-align: left;
	text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);
	/* Desktop (md) - >= 768px: Retorna ao tamanho e alinhamento original */
	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		font-size: ${({ theme }) => theme.textSizes["title-title-m"]};
		text-align: left;
	}
`;

export const BannerIntroRegularText = styled(RegularText)`
	font-size: ${({ theme }) => theme.textSizes["text-regular-l"]};
	color: ${({ theme }) => theme.colors["base-subtitle"]};
	text-align: center; /* Centraliza no mobile */

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		text-align: left;
	}
`;

// ----------------------------------------------------
// 4. BANNER BENEFÍCIOS CONTAINER
// ----------------------------------------------------

export const BannerBenefictsContainer = styled.div`
	width: 100%;
	display: grid;
	/* MOBILE-FIRST: Uma coluna para empilhar os benefícios */
	grid-template-columns: 1fr;
	row-gap: 1.25rem;
	margin-top: 2.5rem; /* Margem ajustada para mobile */
	margin-bottom: 0;

	/* Desktop/Tablet (md) - >= 768px: Duas colunas */
	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		grid-template-columns: 1fr 1fr;
		margin-top: 4.125rem;
	}
`;

// Exportação mantida, assumindo que esta é usada em outro lugar.
export const BenefictsWithIcon = styled.div``;
