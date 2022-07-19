import styled from "styled-components";

export const MiddleContentContainer = styled.div`

    h1{
        display: flex;
        margin: 50px;
        justify-content: center;
    }
    
`;

export const Premium = styled.div`
    .swiper{
        width: 90%;
        height: 100%;
    }

    .swiper-slide{
        display: flex;
        flex-direction: column;
        align-items: center;

        h2{
            text-transform: uppercase;
            font-size: 30px;
            font-weight: 400;
        }
    }

`;


export const Investments = styled.div`
    .title{
        color: #F15412;
        text-transform: uppercase;
        font-size: 60px;
    }

    .card-container{
        display: flex;
        flex-direction: row;
        justify-content: center;

        .card1{
            height: 400px;
            display: flex;
            flex-direction: column;
            background: #EAF6F6;
            border-radius: 10px;
            align-items: center;
            padding: 20px;
            margin-right: 20px;

            .discount{
                padding: 5px 30px;
                background: #F15412;
                border-radius: 30px;
                color: white;
                font-size: 26px;

                .off{
                    font-size: 18px;
                    text-transform: uppercase;
                }
            }

            .full-price{
                color: #231955;
                margin-top: -20px;
                margin-bottom: -10px;

                .bold{
                    font-weight: 700;
                }
            }

            .installments{
                font-size: 16px;
                margin-bottom: -15px;

                span{
                    font-size: 80px;
                }
            }

            .cta3{
                padding: 12px 35px;
                background: #F15412;
                border: none;
                border-radius: 5px;
                text-transform: uppercase;
                color: white;
                font-weight: bold;
                cursor: pointer;
                margin-bottom: 30px;
            }

            .expiration{
                font-size: 16px;
            }
        }

        .card2{
            height: 450px;
            display: flex;
            flex-direction: column;
            background: #54BAB9;
            border-radius: 10px;
            align-items: center;
            padding: 20px;
            margin-right: 20px;
            color: white;

            .discount{
                padding: 5px 30px;
                background: white;
                border-radius: 30px;
                color: #F15412;
                font-size: 24px;

                .off{
                    font-size: 16px;
                    text-transform: uppercase;
                }
            }

            .full-price{
                color: #231955;
                margin-top: -20px;
                margin-bottom: -10px;

                .bold{
                    font-weight: 700;
                }
            }

            .installments{
                font-size: 16px;
                margin-bottom: -15px;

                span{
                    font-size: 80px;
                }
            }

            .cta3{
                padding: 15px 45px;
                background: #F15412;
                border: none;
                border-radius: 5px;
                text-transform: uppercase;
                color: white;
                font-weight: bold;
                cursor: pointer;
                margin-bottom: 30px;
            }

            .expiration{
                font-size: 16px;
            }
        }

        .card3{
            height: 400px;
            display: flex;
            flex-direction: column;
            background: #EAF6F6;
            border-radius: 10px;
            align-items: center;
            padding: 20px;
            margin-right: 20px;

            .discount{
                padding: 5px 30px;
                background: #F15412;
                border-radius: 30px;
                color: white;
                font-size: 26px;

                .off{
                    font-size: 18px;
                    text-transform: uppercase;
                }
            }

            .full-price{
                color: #231955;
                margin-top: -20px;
                margin-bottom: -10px;

                .bold{
                    font-weight: 700;
                }
            }

            .installments{
                font-size: 16px;
                margin-bottom: -15px;

                span{
                    font-size: 80px;
                }
            }

            .cta3{
                padding: 12px 35px;
                background: #F15412;
                border: none;
                border-radius: 5px;
                text-transform: uppercase;
                color: white;
                font-weight: bold;
                cursor: pointer;
                margin-bottom: 30px;
            }

            .expiration{
                font-size: 16px;
            }
        }
    }
`;

export const Testemonials = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        font-style: italic;
        font-weight: 400;
    }

    .testemonials-card-container{
        display: flex;
        flex-direction: row;
        background: #590696;
        height: 500px;
        justify-content: space-between;
        
        .testemonials-card{
            background: #F15412;
            width: 100%;
            margin-top: 80px;
            margin-right: 40px;
            margin-left: 40px;
            border-radius: 20px 20px 0 0;
            padding: 20px;
            
            .rating{
                color: yellow;
            }

            h3{
                color: #590696;
            }

            p{
                color: white;
            }
        }
    }
`;

export const CTA2 = styled.button`
    padding: 20px 35px;
    height: 50%;
    background: #F15412;
    border: none;
    border-radius: 10px;
    text-transform: uppercase;
    color: white;
    font-weight: bold;
    cursor: pointer;
    margin-bottom: 30px;
    margin-top: 30px;
    width: 15%;
`;