import * as React from 'react';
import Logo from '../../assets/images/Grow Up.png';
import CountdownTimer from '../Timer/Timer';
import { HeaderContainer, CTA1 } from './style';

const Header = () => {
    return(
        <HeaderContainer>
            <img className='logo' src={Logo} alt="Logo" />
            <CountdownTimer
                countdownTimesMs={1659320460000}
            />
            <CTA1>Assine agora</CTA1>
        </HeaderContainer>
    )
};

export default Header;