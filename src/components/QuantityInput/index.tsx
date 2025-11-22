import { Minus, Plus } from "phosphor-react";
import { 
    QuantityInputContainer,
    IconWrapperContainer
} from "./styles";


interface QuantityInputProps {
    quantity: number;
    size?: "s" | "m";
    onIncrease?: () => void;
    onDecrease?: () => void;
}

export function QuantityInput({ size="m",onDecrease,onIncrease,quantity }: QuantityInputProps) {

    return (
      <QuantityInputContainer size={size}>
        <IconWrapperContainer onClick={onDecrease}>
            <Minus size={14} weight="fill"/>
        </IconWrapperContainer>
        <input type="number" readOnly value={quantity}/>
        <IconWrapperContainer onClick={onIncrease}>
            <Plus size={14} weight="fill"/>
        </IconWrapperContainer>
      </QuantityInputContainer>  
    )
}