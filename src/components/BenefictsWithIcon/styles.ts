import styled from "styled-components"
import { RegularText } from "../Typography";

interface IconContainerProps{
    $iconBg: string;
}


export const BenefictsWithIconContainer = styled(RegularText)`
	display: flex;
	align-items: center;
	gap: 0.75rem;
	font-size: ${({ theme }) => theme.textSizes["text-regular-m"]};
	width: 100%;

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};
		display: flex;
		padding: 0.5rem;
		background: ${({ theme }) => theme.colors["base-card"]};
		border: 1px solid ${({ theme }) => theme.colors["brand-purple-dark"]};
		border-radius: 6px;
		align-items: center;
		gap: 0.75rem;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};
		display: flex;
		padding: 0.5rem;
		//background: ${({ theme }) => theme.colors["base-card"]};
		//border: 1px solid ${({ theme }) => theme.colors["brand-purple-dark"]};
		border-radius: 6px;
		align-items: center;
		gap: 0.75rem;
	}
`;

export const IconContainer = styled.div<IconContainerProps>`
	width: 32px;
	height: 32px;
	border-radius: 50%;

	background: ${({ $iconBg }) => $iconBg};
	color: ${({ theme }) => theme.colors["base-white"]};
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		width: 28px;
        height: 28px;
	}
`;


export const InfoContainer = styled.div`
`


