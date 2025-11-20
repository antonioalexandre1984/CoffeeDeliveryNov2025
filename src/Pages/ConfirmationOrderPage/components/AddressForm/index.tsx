import { Input } from '../../../../components/Input'
import {AddressFormContainer} from './styles'

export function AddressForm (){
    return(
        <AddressFormContainer>
            
            <div className="cep">
                 <Input
                placeholder="CEP"
                type="number"
                
            />
            </div>
           <div className="street">
               <Input
                placeholder="Rua"
                type="number"
                className="street"
            />
           </div>
            
            <div className="number">
            <Input
                placeholder="Número"
                type="number"
                className="number"
            />
            </div>
            <div className="complement">
            
              <Input
                placeholder="Complemento"
                className="complement"
            />
            </div>
            <div className="district">
              <Input
                placeholder="Bairro"
                className="district"
            />
            </div>
            <div className="city">
                <Input
                placeholder="Cidade"
                className="city"
            />
            </div>
            <div className="uf">
                <Input
                placeholder="UF"
                className="uf"
            />  
            </div>
     
        </AddressFormContainer>
    )

}