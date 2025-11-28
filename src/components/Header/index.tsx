import {HeaderContainer,HeaderButton, HeaderButtonContainer} from './styles'
import Logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from "react-router-dom"
import { useCart } from '../../hooks/useCart';
import { useEffect, useState } from 'react';
export function Header(){
    const {cartQuantity} = useCart();
      const [scrolled, setScrolled] = useState(false);
        // Função para lidar com o evento de rolagem
    useEffect(() => {
        const handleScroll = () => {
            // Verifica se a posição de rolagem vertical (scrollY) é maior que 50px
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        // Adiciona o listener de evento quando o componente é montado
        window.addEventListener('scroll', handleScroll);

        // Remove o listener de evento quando o componente é desmontado (limpeza)
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // O array vazio garante que o useEffect rode apenas na montagem e desmontagem
    console.log('quantidade de itens' + '' + cartQuantity);
    return(
        <HeaderContainer  $scrolled={scrolled}>
            <div className='container'> 
                <NavLink to={"/"}>   
                <img src={Logo} alt="logo"/>
                </NavLink>
                <HeaderButtonContainer>
                    <HeaderButton $variant='purple' $scrolled={scrolled}>
                        <MapPin size={22} weight="fill"/>
                        São Paulo - SP
                    </HeaderButton>
                    <NavLink to={"/conpletecart"}>
                        <HeaderButton $variant='yellow' $scrolled={scrolled}>
                            {cartQuantity >=1 &&<span>{cartQuantity}</span>}   
                            <ShoppingCart size={22} weight="fill"/>
                        </HeaderButton>
                    </NavLink>
                </HeaderButtonContainer>
            </div>
        </HeaderContainer>
    )
}