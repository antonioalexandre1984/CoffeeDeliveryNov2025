import styled, { css } from "styled-components";

interface QuantityInputContainerProps {
	size?: "s" | "m";
}

export const QuantityInputContainer = styled.div<QuantityInputContainerProps>`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 72px;
	gap: 8px;
	border-radius: 6px;
	padding: 0.5rem;
	background: ${({ theme }) => theme.colors["base-button"]};

	input {
		//padding: 0.25rem 0.50rem;
		border: none;
		width: 100%;
		max-width: 32px;
		color: ${({ theme }) => theme.colors["base-title"]};
		font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};
		transition: 0.4s;
		background: none;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		&:focus {
			outline: none;
		}

		&:disabled {
			opacity: 0.4;
		}
		&:not(:disabled):hover {
			color: ${(props) => props.theme.colors["brand-purple-dark"]};
		}

		&:focus {
			outline: none;
		}
	}
	${({ size }) =>
		size === "s" &&
		css`
			padding: 0.3rem 0.5rem;
		`}
`;

export const IconWrapperContainer = styled.button.attrs({
	type: "button",
})`
	border: none;
	background: none;
	width: 0.875rem;
	height: 0.875rem;
	color: ${(props) => props.theme.colors["brand-purple"]};
	transition: 0.4s;
	&:disabled {
		opacity: 0.4;
	}
	&:not(:disabled):hover {
		color: ${(props) => props.theme.colors["brand-purple-dark"]};
	}
`;
