import styled from "styled-components";

export const QuantityInputContainer = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
max-width: 72px;
gap: 8px;
border-radius: 6px;
padding: 0.5rem;
background: ${({theme})=> theme.colors["base-button"]};

input{
    //padding: 0.25rem 0.50rem;
    border: none;
    width: 100%;
    max-width: 24px;
    color: ${({theme})=> theme.colors["base-title"]};
    transition: 0.4s;
    background: none;
   
    
    &:disabled{
        opacity: 0.4;
    }
    &:not(:disabled):hover{
        color: ${props => props.theme.colors['brand-purple-dark']};
    }

    &:focus{
        outline: none;
    }
}


`

export const IconWrapperContainer = styled.button`
display: flex;
align-items: center;
border: none;
background: none;
width: 0.875rem;
height: 0.875rem;
color: ${props => props.theme.colors['brand-purple']};
transition: 0.4s;
 &:disabled{
        opacity: 0.4;
    }
    &:not(:disabled):hover{
        color: ${props => props.theme.colors['brand-purple-dark']};
    }

    &:focus{
        outline: none;
    }
`