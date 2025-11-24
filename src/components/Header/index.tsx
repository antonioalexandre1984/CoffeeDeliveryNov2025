import {HeaderContainer,HeaderButton, HeaderButtonContainer} from './styles'
import Logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from "react-router-dom"
import { useCart } from '../../hooks/useCart';
export function Header(){
    const {cartQuantity} = useCart();
    console.log('quantidade de itens' + '' + cartQuantity);
    return(
        <HeaderContainer>
            <div className='container'> 
                <NavLink to={"/"}>   
                <img src={Logo} alt="logo"/>
                </NavLink>
                <HeaderButtonContainer>
                    <HeaderButton $variant='purple'>
                        <MapPin size={22} weight="fill"/>
                        São Paulo - SP
                    </HeaderButton>
                    <NavLink to={"/conpletecart"}>
                        <HeaderButton $variant='yellow'>
                            {cartQuantity >=1 &&<span>{cartQuantity}</span>}   
                            <ShoppingCart size={20} weight="fill"/>
                        </HeaderButton>
                    </NavLink>
                </HeaderButtonContainer>
            </div>
        </HeaderContainer>
    )
}