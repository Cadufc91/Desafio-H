import * as React from 'react';
import { CTA2, Management, Tools, TopContentContainer } from './style';
import Platforms from '../../assets/images/Plataformas.svg';
import Ativo from '../../assets/images/Ativo.jpg';
import Carteira from '../../assets/images/Carteira 1.png';
import Provento from '../../assets/images/Proventos4.png';
import Rebalanceamento from '../../assets/images/Rebalanceamento 2.jpg';


const TopContent = () => {
    return(
        <TopContentContainer>
            <Management>
                <img src={Platforms} alt="Plataformas" />
                <div className='text1'>
                    <h1>A melhor forma de acompanhar e gerenciar a sua carteira de investimentos!</h1>
                    <p>
                        Tenha acesso as melhores ferramentas do mercado: Rebalanceamento dos ativos,
                        extrato completo de suas operações, rentabilidade atualizada e MUITO mais!
                    </p>
                </div>
            </Management>
            <Tools>
                <div className='content'>
                    <div className='text'>
                        <h1>Chega de planilhas e métodos antigos</h1>
                        <p>Faça como grandes investidores de sucesso, tenha acesso as melhores ferramentas do mercado!</p>
                    </div>
                    <div className='images'>
                        <img src={Rebalanceamento} alt="" />
                        <img src={Carteira} alt="" />
                        <img src={Ativo} alt="" />
                        <img src={Provento} alt="" />
                    </div>
                </div>
                <CTA2>Assine já</CTA2>
            </Tools>
        </TopContentContainer>
    )
};

export default TopContent;