import { TitleText } from "../../../../components/Typography"
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
            <OneCoffeeCard/>
            <OneCoffeeCard/>
            <OneCoffeeCard/>
            <OneCoffeeCard/>
            <OneCoffeeCard/>
            <OneCoffeeCard/>
            <OneCoffeeCard/>
            <OneCoffeeCard/>
            </AllCoffeeList>
        </AllCoffeeContainer>
    )
}