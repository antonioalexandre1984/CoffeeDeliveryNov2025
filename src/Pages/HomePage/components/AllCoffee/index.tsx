import { TitleText } from "../../../../components/Typography"
import { coffees } from "../../../../data/coffees"
import { OneCoffeeCard } from "../OneCoffeeCard"
import {
    AllCoffeeContainer,
    AllCoffeeList
} from "./styles"

export function AllCoffee(){
    return(
        <AllCoffeeContainer className="container">
            <TitleText size="l">Nossos Cafés</TitleText>
            <AllCoffeeList>
                {coffees.map((coffee) => (
                <OneCoffeeCard key={coffee.id} coffee={coffee}/>    
                ))}
         
            </AllCoffeeList>
        </AllCoffeeContainer>
    )
}