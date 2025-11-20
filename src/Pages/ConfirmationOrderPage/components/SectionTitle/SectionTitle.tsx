import { RegularText } from "../../../../components/Typography";
import { SectionTitleContainer,SectionTitleContent } from "./styles";

interface SectionTitleProps{
    title?: string;
    subtitle?: string;
      icon?: React.ReactNode;
}


export function SectionTitle({title,subtitle,icon}:SectionTitleProps){
    return(
        <SectionTitleContainer>
            {icon}
            <SectionTitleContent>
            <RegularText color="subtitle">{title}</RegularText>
            <RegularText color="subtitle">{subtitle}</RegularText>
            </SectionTitleContent>
        </SectionTitleContainer>
    )
}