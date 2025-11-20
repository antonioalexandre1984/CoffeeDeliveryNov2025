import { TitleText } from "../../../../components/Typography";
import { CoffeeCard } from "../CoffeeCard";
import { ConfirmationOrderPrice } from "../ConfirmationOrderPrice";
import { SelectedCoffeesContainer,SelectedCoffeeDetails } from "./styles";

export function SelectedCoffees(){
    return(
        <SelectedCoffeesContainer>
            <TitleText size="s" color="subtitle">Cafés selecionados</TitleText>
             <SelectedCoffeeDetails>
                    <CoffeeCard/>
                    <CoffeeCard/>
                    <CoffeeCard/>
                    <CoffeeCard/>  
                <ConfirmationOrderPrice/>
             </SelectedCoffeeDetails>
         
        </SelectedCoffeesContainer>
    )
}