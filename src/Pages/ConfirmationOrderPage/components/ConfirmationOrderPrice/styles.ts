import styled from "styled-components";

export const ConfirmationOrderPriceContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
	margin-top: 24px;
	padding: 0 0 24px;

	.top {
		margin-top: 24px;
	}

	> div {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 12px;
	}

	button {
		margin-top: 1.5rem;
		width: 100%;
		padding: 0.75rem 0.5rem;
		background-color: ${({ theme }) => theme.colors["brand-yellow"]};
		color: ${({ theme }) => theme.colors["base-white"]};
		border: none;
		font-weight: bold;
		font-size: 0.875rem;
		text-transform: uppercase;
		transition: background-color 0.2s;

		&:hover {
			background-color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
		}
	}

	border-top: 1px solid ${({ theme }) => theme.colors["base-button"]};

    
`;