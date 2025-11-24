import {PaymentMethodInputContainer,ContentContainer} from "./styles";
import {forwardRef, type InputHTMLAttributes,type ReactNode} from 'react';

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
    icon?:ReactNode;
    label: string;
}

export const PaymentMethodInput= forwardRef<HTMLInputElement,PaymentMethodInputProps>(({id,icon,label,...props},ref)=>{
    return(
        <PaymentMethodInputContainer>
            <input
             type="radio"
              name="paymentMethod"
              {...props}
                id={id}
                ref={ref}
            />
            <label htmlFor={id}>
                <ContentContainer>
                    {icon}
                    {label}
                </ContentContainer>
            </label>
        </PaymentMethodInputContainer>
    )
});