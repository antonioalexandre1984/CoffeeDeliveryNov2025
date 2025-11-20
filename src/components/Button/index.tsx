import { ButtonContainer } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    text?: string;
    icon?: React.ReactNode;
}


export function Button({text,icon,...rest}:ButtonProps) {
    return(
        <ButtonContainer {...rest}>
            {icon}
            {text}
        </ButtonContainer>
    ) 
}