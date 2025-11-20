                
import type { InputHTMLAttributes } from "react";
import { InputWrapper, InputStyleContainer,/* RightText, */ InputStyled} from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {

}
export function Input({...props}:InputProps ) {
	return (
		<InputWrapper>
			<InputStyleContainer>
                <InputStyled {...props}/>
		{/* 		<RightText>Nome</RightText> */}
			</InputStyleContainer>
		</InputWrapper>
	);
}
