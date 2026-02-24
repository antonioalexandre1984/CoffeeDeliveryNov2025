import styled, { css } from "styled-components";
import { rgba} from 'polished'

interface HeaderButtonProps {
	$variant: "purple" | "yellow";
	$scrolled: boolean;
}

// ----------------------------------------------------
// 1. HEADER CONTAINER
// ----------------------------------------------------

interface HeaderContainerProps {
	$scrolled: boolean;
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
	width: 100%;
	height: 6.5rem;
	background: ${({ theme }) => theme.colors["base-background"]};
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: sticky;
	top: 0;
	left: 0;
	z-index: 5;

	/* Transição suave para a mudança de cor de fundo */
	transition: background-color 0.3s ease-in-out;

	/* Estilo condicional ao rolar a tela */
	${({ $scrolled, theme }) =>
		$scrolled &&
		css`
			/* Fundo roxo transparente (rgba) quando a página for rolada */
			background-color: ${rgba(theme.colors["brand-purple-light"], 0.85)};
			/* Adiciona uma sombra para dar profundidade ao cabeçalho fixo */
			box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
			backdrop-filter: blur(4px); /* Efeito de desfoque sutil (opcional) */
		`}

	//margin-bottom: 2rem;
	/* /* Mobile-First (Padrão para telas < 375px) */
	> div {
		/* AFASTA O MÁXIMO POSSÍVEL NO MOBILE */
		/* padding: 0 1rem;
		max-width: 100%; */
		height: 60px;
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
			padding: 1rem; /* Remove padding se o max-width centraliza */
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
	gap: 0.75rem;

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
	height: 2.3rem;
	min-width: 2.3rem;
	border-radius: 6px;
	padding: 0 0.5rem;
	position: relative;
	cursor: pointer;
	font-size: ${({ theme }) => theme.textSizes["text-regular-m"]};

	span {
		/* DIMINUIÇÃO: Bolha menor para o mobile */
		height: 1.25rem;
		width: 1.25rem;
		border-radius: 50%;
		color: ${({ theme }) => theme.colors["base-white"]};
		top: calc(-1.25rem / 2);
		right: calc(-1.25rem / 2);
		font-size: 0.75rem;
		font-weight: 700;
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
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

	${({ $variant, theme, $scrolled }) => css`
		span {
			background: ${theme.colors[`brand-${$variant}-dark`]};
		}
		background: ${theme.colors[`brand-${$variant}-light`]};
		color: ${theme.colors[`brand-${$variant}-dark`]};

		/* 🚨 Estilo condicional ao rolar: altera o background para -dark e a cor do texto para base-white 🚨 */
		${$scrolled &&
		css`
			/* Estilo para Botão Roxo (Localização) */
			${$variant === "purple" &&
			css`
				background: ${theme.colors["brand-purple-dark"]};
				color: ${theme.colors["base-white"]};
			`}

			/* Estilo para Botão Amarelo (Carrinho) */
            ${$variant === "yellow" &&
			css`
				background: ${theme.colors["brand-yellow-dark"]};
				color: ${theme.colors[
					"base-white"
				]}; /* Inverte para garantir visibilidade do ícone */
			`}

			 > span {
				background: ${theme.colors[`brand-${$variant}-light`]};

				/* 🚨 Ajuste condicional do span (bolha) ao rolar 🚨 */
				${$variant === "yellow" &&
				$scrolled &&
				css`
					background: ${theme.colors["base-white"]};
					color: ${theme.colors[
						`brand-${$variant}-dark`
					]}; /* Garante bom contraste */
					border: 1px solid
				`}
			}
		`}
	`}
`;
