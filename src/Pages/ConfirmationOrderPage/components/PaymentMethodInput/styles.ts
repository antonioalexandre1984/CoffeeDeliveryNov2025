import styled, { css } from "styled-components";

export const PaymentMethodInputContainer = styled.div`

input{
    visibility: hidden;
    appearance: none;
}

input:checked + label div{
    ${({ theme }) => css`
			background: ${theme.colors["brand-purple-light"]};
			border-color: ${theme.colors["brand-purple"]};

			&:hover {
				background: ${theme.colors["brand-purple-light"]};
			}
		`}
}`


export const ContentContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	min-width: 178px;
	gap: 0.75rem;
	padding: 0 1rem;
	height: 3rem;
	border: 1px solid ${({ theme }) => theme.colors["base-button"]};
	background: ${({ theme }) => theme.colors["base-button"]};
	font-size: 0.75rem;
	transition: 0.4s;

	svg {
		color: ${({ theme }) => theme.colors["brand-purple"]};
	}

	&:hover {
		background: ${({ theme }) => theme.colors["brand-purple-light"]};
	}

    user-select: none;
`;