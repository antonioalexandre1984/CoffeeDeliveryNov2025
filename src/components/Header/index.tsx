import {HeaderContainer,HeaderButton, HeaderButtonContainer} from './styles'
import Logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from "react-router-dom"
export function Header(){
    return(
        <HeaderContainer>
            <div className='container'> 
                <NavLink to={"/"}>   
                <img src={Logo} alt="logo"/>
                </NavLink>
                <HeaderButtonContainer>
                    <HeaderButton variant='purple'>
                        <MapPin size={22} weight="fill"/>
                        São Paulo - SP
                    </HeaderButton>
                    <NavLink to={"/conpletecart"}>
                        <HeaderButton variant='yellow'>
                            <span>99</span>   
                            <ShoppingCart size={22} weight="fill"/>
                        </HeaderButton>
                    </NavLink>
                </HeaderButtonContainer>
            </div>
        </HeaderContainer>
    )
}