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

	/* Desktop/Tablet (lg) - Ajuste de altura se necessário */
	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
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
		max-width: 460px; /* Limita o tamanho máximo */
	}

	/* Celular pequeno (sm) - Ajusta o tamanho da imagem */
	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		img {
			width: 80%; /* Reduz um pouco no celular */
			height: auto;
			max-width: 300px;
		}
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
			width: 476px;
			height: 360px;
			max-width: none;
		}
	}

	/* Desktop grande (lg) - >= 992px: Ajuste da imagem */
	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		img {
			width: 550px;
			height: 400px;
		}
	}
`;

// ----------------------------------------------------
// 3. BANNER INTRO TEXTS
// ----------------------------------------------------

export const BannerIntroTitle = styled(TitleText)`
	margin-bottom: 1rem;
	text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);

	/* MOBILE-FIRST (Estilo Base) */
	font-size: ${({ theme, size }) => {
		if (size === "xl") return theme.textSizes["title-title-l"];
		if (size === "l") return theme.textSizes["title-title-m"];
		return theme.textSizes[`title-title-${size ?? "m"}`];
	}};
	text-align: center;

	/* Tablet (md) - >= 768px: Retorna ao tamanho definido na prop 'size' e alinha à esquerda */
	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		font-size: ${({ theme, size }) =>
			theme.textSizes[`title-title-${size ?? "m"}`]};
		text-align: left;
	}
	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		text-align: left;
		gap:1rem;
	}
`;

export const BannerIntroRegularText = styled(RegularText)`
	color: ${({ theme }) => theme.colors["base-subtitle"]};

	/* MOBILE-FIRST (Estilo Base) */
	font-size: ${({ theme, size }) => {
		if (size === "l") return theme.textSizes["text-regular-s"];
		return theme.textSizes[`text-regular-${size ?? "m"}`];
	}};
	text-align: center;

	/* Tablet (md) - >= 768px: Retorna ao tamanho definido na prop 'size' e alinha à esquerda */
	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		font-size: ${({ theme, size }) =>
			theme.textSizes[`text-regular-${size ?? "m"}`]};
		text-align: left;
	}
`;

// ----------------------------------------------------
// 4. BANNER BENEFÍCIOS CONTAINER (AJUSTADO PARA CASCATA)
// ----------------------------------------------------

export const BannerBenefictsContainer = styled.div`
	width: 100%;
	margin-top: 2.5rem; /* Margem ajustada para mobile */

	/* MOBILE-FIRST: Uma única coluna para empilhamento (efeito cascata) */
	display: grid;
	grid-template-columns: 1fr; /* Uma coluna de largura total */
	row-gap: 1.25rem; /* Espaçamento vertical entre os itens */

	/* Garante que o grid se alinhe à esquerda se o container for mais largo */
	justify-items: start;

	/* Tablet (md) - >= 768px: Estrutura de duas colunas */
	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		grid-template-columns: repeat(
			2,
			max-content
		); /* Duas colunas, ajustando a largura ao conteúdo */
		column-gap: 2.5rem; /* Espaçamento horizontal entre as colunas */
		row-gap: 1.25rem;
		margin-top: 4.125rem;
	}

	/* Desktop grande (lg) - Mantém a estrutura de duas colunas */
	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		grid-template-columns: repeat(2, max-content);
	}
`;
