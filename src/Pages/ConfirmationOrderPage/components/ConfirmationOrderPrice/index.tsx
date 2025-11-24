/* import { NavLink } from "react-router-dom"; */
import { Button } from "../../../../components/Button";
import { RegularText, TitleText } from "../../../../components/Typography";
import { ConfirmationOrderPriceContainer } from "./styles";
import { useCart } from "../../../../hooks/useCart";

const deliveryFee = 3.50;


export function ConfirmationOrderPrice(){ 
   const { cartItemsTotal, formatMoney,cartQuantity } = useCart();

    //const deliveryFeeFormatted = formatMoney(3.50);
    const priceWithdeliveryFormatted = formatMoney(cartItemsTotal);
    const cartTotal = formatMoney(cartItemsTotal + deliveryFee);
    const deliveryFeeFormatted = formatMoney(deliveryFee);
    return(
        <ConfirmationOrderPriceContainer> 
            <div className="top">      
                <RegularText>Total de itens</RegularText>
                <RegularText>R$ {priceWithdeliveryFormatted}</RegularText>
            </div>
            <div>
            <RegularText>Entrega</RegularText>
            <RegularText>R${deliveryFeeFormatted}</RegularText>
            </div>
            <div>
            <TitleText size="m">Total</TitleText>
              <TitleText size="m">{cartTotal}</TitleText>
            </div>
          {/*    <NavLink to={"/orderconfirmed"}> */}
            <Button type="submit" text="CONFIRMAR PEDIDO" disabled={cartQuantity <0 }
            />
          {/*   </NavLink> */}
        </ConfirmationOrderPriceContainer>
    )
}
