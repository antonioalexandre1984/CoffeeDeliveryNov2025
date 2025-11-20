import {
    CompleteOrderPageContainer,
} from './styles'
import { CompleteOrderForm } from './components/CompleteOrderForm'
import { SelectedCoffees } from './components/SelectedCoffees'

export function CompleteOrderPage(){
    return(
        <CompleteOrderPageContainer className="container">
               <CompleteOrderForm />
               <SelectedCoffees/>
        </CompleteOrderPageContainer>
    )
}