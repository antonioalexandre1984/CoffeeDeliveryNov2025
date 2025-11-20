import { NavLink } from "react-router-dom";
import { Button } from "../../../../components/Button";
import { RegularText, TitleText } from "../../../../components/Typography";
import { ConfirmationOrderPriceContainer } from "./styles";


export function ConfirmationOrderPrice(){
    return(
        <ConfirmationOrderPriceContainer> 
            <div className="top">      
                <RegularText>Total de itens</RegularText>
                <RegularText>R$ 29,70</RegularText>
            </div>
            <div>
            <RegularText>Entrega</RegularText>
            <RegularText>R$ 29,70</RegularText>
            </div>
            <div>
            <TitleText size="m">Total</TitleText>
              <TitleText size="m">R$ 29,70</TitleText>
            </div>
             <NavLink to={"/orderconfirmed"}>
            <Button type="submit" text="CONFIRMAR PEDIDO"/>
            </NavLink>
        </ConfirmationOrderPriceContainer>
    )
}
