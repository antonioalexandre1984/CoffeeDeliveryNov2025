                
import { forwardRef, type InputHTMLAttributes } from "react";
import { InputWrapper, InputStyleContainer,/* RightText, */ InputStyled, RightText} from "./styles";
import { RegularText } from "../Typography";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	error?: string | undefined; 
	rightText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({error,className, rightText,...props }, ref) => {
	return (
		<InputWrapper className={className}>
			<InputStyleContainer $hasError={!!error}>
				<InputStyled {...props} ref={ref}  />
				{rightText && <RightText>{rightText}</RightText>}
			</InputStyleContainer>
			{error && <RegularText size="s">{error}</RegularText>}
		</InputWrapper>
	);
});