import { TitleText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { CoffeeCard } from "../CoffeeCard";
import { ConfirmationOrderPrice } from "../ConfirmationOrderPrice";
import { SelectedCoffeesContainer,SelectedCoffeeDetails } from "./styles";

export function SelectedCoffees(){
    const { cartItems } = useCart();
    return(
        <SelectedCoffeesContainer>
            <TitleText size="s" color="subtitle">Cafés selecionados</TitleText>
             <SelectedCoffeeDetails>
                {cartItems.map(coffee=>(
                    <CoffeeCard 
                      key={coffee.id} coffee={coffee}/>
                ))}
                <ConfirmationOrderPrice/>
             </SelectedCoffeeDetails>
         
        </SelectedCoffeesContainer>
    )
}