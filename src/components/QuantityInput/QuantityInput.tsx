import { Minus, Plus } from "phosphor-react";
import { 
    QuantityInputContainer,
    IconWrapperContainer
} from "./styles";


export function QuantityInput(){
    return(
      <QuantityInputContainer>
        <IconWrapperContainer>
            <Minus size={22} weight="fill"/>
        </IconWrapperContainer>
        <input type="number" readOnly value={9}/>
        <IconWrapperContainer>
            <Plus size={22} weight="fill"/>
        </IconWrapperContainer>
      </QuantityInputContainer>  
    )
}