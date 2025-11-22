import { AllCoffee } from "./components/AllCoffee";
import { Banner } from "./components/Banner";
import { HomePageContainer } from "./styles";

export function HomePage(){
    return(
        <HomePageContainer>
            <Banner/>
            <AllCoffee/>
        </HomePageContainer>
    )
}