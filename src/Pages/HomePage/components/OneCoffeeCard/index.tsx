import {OneCoffeeCardContainer,Tag,Description,OneCoffeeCardFooter,ButtonAddCart} from "./styles"
import americano from '../../../../assets/coffees/americano.png'
import { RegularText, TitleText } from "../../../../components/Typography"
import { ShoppingCart } from "phosphor-react"
import { QuantityInput } from "../../../../components/QuantityInput/QuantityInput"
export function OneCoffeeCard(){
    return(
        <OneCoffeeCardContainer>
            <img src={americano}/>
            <Tag>
               <span>Tradicional</span>
               <span>Colonial</span> 
            </Tag>
            <TitleText size="s" color="subtitle">
                Expresso Tradicional
            </TitleText>
            <Description>
                O tradicional café feito com água quente e grãos moídos
            </Description>
            <OneCoffeeCardFooter>
                <RegularText>R$</RegularText>
                <TitleText size="m">9,90</TitleText>
                <QuantityInput/>
                   <ButtonAddCart>
                    <ShoppingCart size={22} weight="fill"/>
                </ButtonAddCart>
            </OneCoffeeCardFooter>
          
        </OneCoffeeCardContainer>
    )
}