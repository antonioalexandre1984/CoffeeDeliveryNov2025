import { RegularText, TitleText } from "../../../../components/Typography";
import styled from "styled-components";
import introBackground from '../../../../assets/intro-background.png'
import {rgba} from 'polished' 

export const BannerContainer = styled.section`
width: 100%;
height: 34rem;

background: ${({ theme }) => `url(${introBackground}) no-repeat center,linear-gradient(
    0deg,
    ${theme.colors['base-white']} 0%,
    ${rgba(theme.colors['base-background'], 0.2)} 50%,
    ${theme.colors['base-background']} 100%
)`}; ;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
`

export const BannerContent = styled.div`
display: flex;
align-items: top;
justify-content: space-between;
gap: 3.5rem;

img{
    width: 476px;
    height: 360px;
}

`

export const BannerIntroTitle = styled(TitleText)`
margin-bottom: 1rem;
font-size: ${({theme})=> theme.textSizes["title-title-xl"]};
text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);

`

export const BannerIntroRegularText = styled(RegularText)`
font-size: ${({theme})=> theme.textSizes["text-regular-l"]};
color:${({theme})=> theme.colors["base-subtitle"]};

`

export const BannerBenefictsContainer = styled.div`
width: 100%;
display: grid;
grid-template-columns: 1fr 1fr;
row-gap: 1.25rem;
margin-top:4.125rem; 

`

export const BenefictsWithIcon = styled.div``
