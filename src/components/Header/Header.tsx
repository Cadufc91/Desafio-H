import * as React from 'react';
import Logo from '../../assets/images/logo.svg';
import { HeaderContainer, Countdown, CTA1 } from './style';

const Header = () => {
    return(
        <HeaderContainer>
            <img className='logo' src={Logo} alt="Logo" />
            <Countdown></Countdown>
            <CTA1>Assine agora</CTA1>
        </HeaderContainer>
    )
};

export default Header;