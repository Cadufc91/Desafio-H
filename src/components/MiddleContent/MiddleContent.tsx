import * as React from 'react';
import { CTA2, Investments, MiddleContentContainer, Premium, Testemonials } from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { TbChartCandle, TbChartDots, TbChartPie, TbFileDescription, TbChartBar,TbStar } from 'react-icons/tb';
import CountdownTimer from '../Timer/Timer';

const MiddleContent = () => {
    return(
        <MiddleContentContainer>
            <Premium>
                <h1>Funcionalidades Grow Up PREMIUM</h1>
                <Swiper
                    loop={true}
                    spaceBetween={60}
                    slidesPerView={4}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                            <TbChartCandle size={70}/>
                            <h2>Premium1</h2>
                            <p>Diversos gráficos para auxiliar o aconpanhamento e gerenciamento de sua carteira patrimonial.</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <TbChartDots size={70}/>
                        <h2>Patrimônio consolidado</h2>
                        <p>
                            Tenha todos seus investimentos consolidados em uma só carteira. 
                            Somos a plataforma que oferece o maior leque de aplicações financeiras do mercado.
                        </p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <TbChartPie size={70}/>
                        <h2>Rebalanceamento</h2>
                        <p>
                            Ferramenta inédita para não deixar as emoções do mercado abalarem sua estratégia de investimento!
                            Com o rebalanceamento você poderá atribuir uma nota ou porcentagem ideal para cada classe e ativo.
                        </p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <TbFileDescription size={70}/>
                        <h2>Relatórios</h2>
                        <p>
                            Extrato de carteira de ativos. Consolidação rápida. Download ilimitado de extratos. Análise
                            completa de proventos. 
                        </p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <TbChartBar size={70}/>
                        <h2>Histórico</h2>
                        <p>
                            Evolução histórica da carteira. Bolsas de valores globais. Rendas variáveis. Rendas Fixas. 
                            Criptoativos. Ativos personalizados.
                        </p>
                    </SwiperSlide>
                </Swiper>
            </Premium>
            <Investments>
                <h1 className='title'>Valor de investimento</h1>
                <div className='card-container'>
                    <div className='card1'>
                        <h2 className='discount'>20% <span className='off'>off</span></h2>
                        <p className='full-price'>de <span className='bold'>R$ 142,80</span> por 12x de</p>
                        <h3 className='installments'>R$ <span>9,52</span></h3>
                        <p className='cash'>ou R$ 114,24 à vista</p>
                        <button className='cta3'>Quero meu plano agora</button>
                        <p className='expiration'>Esse desconto expira dia 31/07 às 23h59</p>
                        <CountdownTimer
                            countdownTimesMs={1659320460000}
                        />
                    </div>
                    <div className='card2'>
                        <h2 className='discount'>20% <span className='off'>off</span> | MELHOR OFERTA </h2>
                        <p className='full-price'>De <span className='bold'>R$ 250,80</span> por 12x de</p>
                        <h3 className='installments'> R$ <span>16,72</span></h3>
                        <p className='cash'>ou R$ 200,64 à vista</p>
                        <button className='cta3'>Quero meu plano agora</button>
                        <p className='expiration'>Esse desconto expira dia 31/07 às 23h59</p>
                        <CountdownTimer
                            countdownTimesMs={1659320460000}
                        />
                    </div>
                    <div className='card3'>
                        <h2 className='discount'>20% <span className='off'>off</span></h2>
                        <p className='full-price'>de <span className='bold'>R$ 190,80</span> por 12x de</p>
                        <h3 className='installments'>R$ <span>12,72</span></h3>
                        <p className='cash'>ou R$ 152,64 à vista</p>
                        <button className='cta3'>Quero meu plano agora</button>
                        <p className='expiration'>Esse desconto expira dia 31/07 às 23h59</p>
                        <CountdownTimer
                            countdownTimesMs={1659320460000}
                        />
                    </div>
                </div>
            </Investments>
            <Testemonials>
                <h1>Veja o que as pessoas falam da Grow Up</h1>
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
                <CTA2>Assine já</CTA2>
            </Testemonials>
        </MiddleContentContainer>
    )
};

export default MiddleContent;