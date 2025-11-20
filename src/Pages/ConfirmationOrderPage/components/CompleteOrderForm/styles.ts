import styled from "styled-components";

export const CompleteOrderFormContainer = styled.div`
display: flex;
flex-direction: column;
gap: 0.75rem;
width: 100%;
max-width: 40rem;

//min-height: 23.25rem;
`
export const FormSectionContainer = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
//width: 100%;
background: ${({theme})=> theme.colors["base-card"]};
border-radius: 6px;
padding: 2.5rem;
`;