import styled, { css } from "styled-components";

interface HeaderButtonProps {
	$variant: "purple" | "yellow";
}

// ----------------------------------------------------
// 1. HEADER CONTAINER
// ----------------------------------------------------

export const HeaderContainer = styled.header`
	max-width: 100%;
	background: ${({ theme }) => theme.colors["base-background"]};
	display: flex;
	align-items: center;
	justify-content: center;
	height: 104px;
	position: sticky;
	top: 0;
	left: 0;
	z-index: 5;

	/* /* Mobile-First (Padrão para telas < 375px) */
	> div {
		/* AFASTA O MÁXIMO POSSÍVEL NO MOBILE */
		padding: 0 1rem;
		max-width: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	/* SM (Celulares grandes) - >= 375px */
	@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		max-width: 100%;
		padding: 0 1rem;
		overflow: hidden;
	}

	/* SM (Celulares grandes) - >= 375px */
	 	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		> div {
			padding: 0.5rem;
			overflow-y: hidden;
		}
	} 

	/* MD (Tablets/Surface Retrato) - >= 768px */
	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		> div {
			width: 100%;
			max-width: 950px;
			padding:0 5rem; /* Remove padding se o max-width centraliza */
			display: flex;
			//justify-content: space-between;
		}
	}

	/* LG (Notebooks Pequenos) - >= 992px */
	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		/* Se houver necessidade de mais padding ou ajustes */
		padding: 0 1rem;

	}
`;

// ----------------------------------------------------
// 2. HEADER BUTTON CONTAINER
// ----------------------------------------------------

export const HeaderButtonContainer = styled.div`
	display: flex;
	align-items: center;
	/* MOBILE-FIRST: Mantém gap MÍNIMO para economizar espaço horizontal */
	gap: 0.5rem;

	/* MD (Tablets/Desktops): Aumenta o gap para melhor leitura */
	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		gap: 0.75rem;
	}
`;

// ----------------------------------------------------
// 3. HEADER BUTTON
// ----------------------------------------------------

export const HeaderButton = styled.button<HeaderButtonProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	/* DIMINUIÇÃO: Altura e padding mínimos para MOBILE */
	height: 2rem;
	min-height: 2rem;
	border-radius: 6px;
	padding: 0 0.4rem;
	position: relative;
	cursor: pointer;
	font-size: ${({ theme }) => theme.textSizes["text-regular-m"]};

	span {
		/* DIMINUIÇÃO: Bolha menor para o mobile */
		height: 1rem;
		width: 1rem;
		border-radius: 50%;
		color: ${({ theme }) => theme.colors["base-white"]};
		top: calc(-0.8rem / 2);
		right: calc(-0.8rem / 2);
		font-size: 0.65rem;
		font-weight: 700;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	/* MD (Tablets/Desktops): Retorna aos tamanhos originais/maiores */
	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		height: 2.3rem;
		min-height: 2.3rem;
		padding: 0 0.5rem;
		font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};

		span {
			height: 1.25rem;
			width: 1.25rem;
			top: calc(-1.125rem / 2);
			right: calc(-1.125rem / 2);
			font-size: 0.75rem;
		}
	}

	${({ $variant, theme }) => css`
		background: ${theme.colors[`brand-${$variant}-light`]};
		color: ${theme.colors[`brand-${$variant}-dark`]};

		span {
			background: ${theme.colors[`brand-${$variant}-dark`]};
		}
	`}
`;
