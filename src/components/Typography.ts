import styled from "styled-components";
//import { defaultTheme } from "../path/to/defaultTheme"; // Importação necessária para tipagem se for TypeScript

// Tipagem de cores e tamanhos de texto deve ser dinâmica do tema, mas mantemos
// a estrutura para este arquivo.
interface TitleTextProps {
	color?: "title" | "text" | "subtitle";
	size?: "xl" | "l" | "m" | "s" | "xs";
	weight?: string | number;
}

interface RegularTextProps {
	color?: "title" | "label" | "subtitle";
	size?: "l" | "m" | "s";
	weight?: string | number;
}

// ----------------------------------------------------
// 1. TITLE TEXT (Títulos Grandes)
// ----------------------------------------------------

export const TitleText = styled.h1<TitleTextProps>`
	color: ${({ theme, color }) => theme.colors[`base-${color ?? "title"}`]};
	font-family: ${({ theme }) => theme.fonts.title};
	line-height: 130%;
	font-weight: ${({ weight }) => weight ?? 800};

	/* MOBILE-FIRST (Estilo Base) */
	/* Usamos um tamanho ligeiramente menor como base para o Mobile */
	font-size: ${({ theme, size }) => {
		// Assume um tamanho menor ou igual ao 'm' como base no Mobile para todos os casos
		if (size === "xl") return theme.textSizes["title-title-l"];
		if (size === "l") return theme.textSizes["title-title-m"];
		return theme.textSizes[`title-title-${size ?? "m"}`];
	}};
	text-align: center;

	/* Tablet (md) - >= 768px: Retorna ao tamanho definido na prop 'size' */
	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		font-size: 1rem;
		text-align: left;
	}

	/* Tablet (md) - >= 768px: Retorna ao tamanho definido na prop 'size' */
	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		font-size: ${({ theme, size }) =>
			theme.textSizes[`title-title-${size ?? "m"}`]};
		text-align: left;
	}

	/* Desktop (lg) - >= 992px: Apenas para garantir que o XL seja o maior */
	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		font-size: ${({ theme, size }) =>
			theme.textSizes[`title-title-${size ?? "m"}`]};
	}
`;

// ----------------------------------------------------
// 2. REGULAR TEXT (Textos Comuns)
// ----------------------------------------------------

export const RegularText = styled.p<RegularTextProps>`
	color: ${({ theme, color }) => theme.colors[`base-${color ?? "title"}`]};
	font-family: ${({ theme }) => theme.fonts.regular};
	line-height: 130%;
	font-weight: ${({ weight }) => weight ?? 400};

	/* MOBILE-FIRST (Estilo Base) */
	/* Usamos o 's' ou 'm' como base para o Mobile */
	font-size: ${({ theme, size }) => {
		// Se a prop for 'l', usamos 'm' no mobile para economizar espaço
		if (size === "l") return theme.textSizes["text-regular-m"];
		return theme.textSizes[`text-regular-${size ?? "m"}`];
	}};
	text-align: center;

	/* Tablet (md) - >= 768px: Retorna ao tamanho definido na prop 'size' */
	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		font-size: ${({ theme, size }) =>
			theme.textSizes[`text-regular-${size ?? "m"}`]};
		text-align: left;
	}
`;
