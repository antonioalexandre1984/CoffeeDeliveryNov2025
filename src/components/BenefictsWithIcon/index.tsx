import type { ReactNode } from "react";
import { TitleText } from "../Typography";
import {BenefictsWithIconContainer,IconContainer,InfoContainer} from './styles'

interface BenefictsWithIconProps{
    icon: ReactNode;
    text: string | ReactNode;
    iconBg: string;
    title: string;
}

export function BenefictsWithIcon ({icon,title,text,iconBg}:BenefictsWithIconProps){
    return(
        <BenefictsWithIconContainer>
            <IconContainer iconBg={iconBg}>
                {icon}
            </IconContainer>
            {typeof text === 'string' ? <p>{text}</p> : text}
        {/*     <InfoContainer> */}
             {/*    <TitleText size="l">{title}</TitleText> */}
      {/*       </InfoContainer> */}
            {/* { <TitleText>{title}</TitleText> } */}
        </BenefictsWithIconContainer>
    )
}