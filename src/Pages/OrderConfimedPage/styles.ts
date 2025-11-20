import { styled } from "styled-components";

export const OrderConfimedPageContainer = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	height: 70vh;
	width: 100%;

	/* --- RESPONSIVIDADE PARA MOBILE --- */
	@media (max-width: 768px) {
		// Empilha os itens (Detalhes e Ilustração) verticalmente
		height: 80vh;

		// Alinha os itens flexíveis ao centro quando empilhados
		align-items: center;
        padding: 0 1rem;
	}
`;

export const OrderConfimedContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 2rem;
	width: 100%;
	padding: 1rem 0;
	text-align: center;

	img {
		max-width: 492px;
		width: 100%;
		height: 293px;
	}

	/* --- RESPONSIVIDADE PARA MOBILE --- */
	@media (max-width: 768px) {
		// Empilha os itens (Detalhes e Ilustração) verticalmente
		flex-direction: column;

		// Alinha os itens flexíveis ao centro quando empilhados
		align-items: center;
	}
`;

export const OrderConfimedDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
    padding: 2.5rem;
    border: 1px solid ${({theme})=> theme.colors["brand-yellow"]};
    border-radius: 6px 36px;
    background: linear-gradient(${({theme})=> theme.colors["base-background"]}, ${({theme})=> theme.colors["base-background"]}) padding-box,
    linear-gradient(45deg, ${({theme})=> theme.colors["brand-yellow"]}, ${({theme})=> theme.colors["brand-purple"]}) border-box;
    width: 100%;
    max-width: 526px;
    text-align: left;
    `