import * as React from 'react';
import { Investments, MiddleContentContainer, Premium, Testemonials } from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { TbChartCandle, TbChartDots, TbChartPie, TbFileDescription, TbChartBar,TbStar } from 'react-icons/tb';

const MiddleContent = () => {
    return(
        <MiddleContentContainer>
            <Premium>
                <h1>Funcionalidades Holder+ PREMIUM</h1>
                <Swiper>
                    <SwiperSlide >
                            <TbChartCandle />
                            <h2>Premium1</h2>
                            <p>Diversos gráficos para auxiliar o aconpanhamento e gerenciamento de sua carteira patrimonial.</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <TbChartDots />
                        <h2>Patrimônio consolidado</h2>
                        <p>
                            Tenha todos seus investimentos consolidados em uma só carteira. 
                            Somos a plataforma que oferece o maior leque de aplicações financeiras do mercado.
                        </p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <TbChartPie />
                        <h2>Rebalanceamento</h2>
                        <p>
                            Ferramenta inédita para não deixar as emoções do mercado abalarem sua estratégia de investimento!
                            Com o rebalanceamento você poderá atribuir uma nota ou porcentagem ideal para cada classe e ativo.
                        </p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <TbFileDescription />
                        <h2>Relatórios</h2>
                        <p>
                            Extrato de carteira de ativos. Consolidação rápida. Download ilimitado de extratos. Análise
                            completa de proventos. 
                        </p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <TbChartBar />
                        <h2>Histórico</h2>
                        <p>
                            Evolução histórica da carteira. Bolsas de valores globais. Rendas variáveis. Rendas Fixas. 
                            Criptoativos. Ativos personalizados.
                        </p>
                    </SwiperSlide>
                </Swiper>
            </Premium>
            <Investments>
                <h1>Valor de investimento</h1>
                <div className='card-container'>
                    <div className='card1'>
                        <h2 className='discount'>20% <span className='off'>off</span></h2>
                        <p className='full-price'>de <span className='bold'>R$ 142,80</span> por 12x de</p>
                        <h3 className='installments'>R$ <span>9,52</span></h3>
                        <p className='cash'>ou R$ 114,24 à vista</p>
                        <button className='cta3'>Quero meu plano agora</button>
                        <p className='expiration'>Esse desconto expira dia 31/07 às 23h59</p>
                        <div>countdown</div>
                    </div>
                    <div className='card2'>
                        <h2 className='discount'>20% <span className='off'>off</span> | MELHOR OFERTA </h2>
                        <p className='full-price'>De <span className='bold'>R$ 250,80</span> por 12x de</p>
                        <h3 className='installments'> R$ <span>16,72</span></h3>
                        <p className='cash'>ou R$ 200,64 à vista</p>
                        <button className='cta3'>Quero meu plano agora</button>
                        <p className='expiration'>Esse desconto expira dia 31/07 às 23h59</p>
                        <div>countdown</div>
                    </div>
                    <div className='card3'>
                        <h2 className='discount'>20% <span className='off'>off</span></h2>
                        <p className='full-price'>de <span className='bold'>R$ 190,80</span> por 12x de</p>
                        <h3 className='installments'>R$ <span>12,72</span></h3>
                        <p className='cash'>ou R$ 152,64 à vista</p>
                        <button className='cta3'>Quero meu plano agora</button>
                        <p className='expiration'>Esse desconto expira dia 31/07 às 23h59</p>
                        <div>countdown</div>
                    </div>
                </div>
            </Investments>
            <Testemonials>
                <h1>Veja o que as pessoas falam da Holder+</h1>
                <div className='testemonials-card-container'>
                    <div className='testemonials-card'>
                        <div className='rating'>
                            <TbStar /><TbStar /><TbStar /><TbStar /><TbStar />
                        </div>
                        <h3>Alex Júnior</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div className='testemonials-card'>
                        <div className='rating'>
                            <TbStar /><TbStar /><TbStar /><TbStar /><TbStar />
                        </div>
                        <h3>Guilherme</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div className='testemonials-card'>
                        <div className='rating'>
                            <TbStar /><TbStar /><TbStar /><TbStar /><TbStar />
                        </div>
                        <h3>Marcio Valério</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div className='testemonials-card'>
                        <div className='rating'>
                            <TbStar /><TbStar /><TbStar /><TbStar /><TbStar />
                        </div>
                        <h3>Joao Ferreira</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
                <button>Assine já</button>
            </Testemonials>
        </MiddleContentContainer>
    )
};

export default MiddleContent;