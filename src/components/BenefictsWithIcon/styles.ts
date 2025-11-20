import styled from "styled-components"

interface IconContainerProps{
    iconBg: string;
}


export const BenefictsWithIconContainer = styled.div`
display: flex;
align-items: center;
gap: 0.75rem;
font-size: ${({theme})=> theme.textSizes["text-regular-m"]};
width: 100%;


`

export const IconContainer = styled.div<IconContainerProps>`
width: 32px;
height: 32px;
border-radius: 50%;

background: ${({iconBg})=> iconBg};
color: ${({theme})=> theme.colors["base-white"]};
display: flex;
align-items: center;
justify-content: center;
`


export const InfoContainer = styled.div`
`


