import styled from "styled-components";

export const PaymentMethodOptionsContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.75rem;

	/* ----------------------------------- */
	/* RESPONSIVIDADE MÓVEL       */
	/* ----------------------------------- */
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;