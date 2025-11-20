import {PaymentMethodInputContainer,ContentContainer} from "./styles";
import type {InputHTMLAttributes,ReactNode} from 'react';

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
    icon?:ReactNode;
    label: string;
}

export function PaymentMethodInput({id,icon,label,...props}:PaymentMethodInputProps){
    return(
        <PaymentMethodInputContainer>
            <input
             type="radio"
              name="paymentMethod"
              {...props}
            />
            <label htmlFor={id}>
                <ContentContainer>
                    {icon}
                    {label}
                </ContentContainer>
            </label>
        </PaymentMethodInputContainer>
    )
}