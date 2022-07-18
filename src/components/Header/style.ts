import styled from 'styled-components';

export const HeaderContainer = styled.div`
    background: #3A5BA0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 65px;

    img{
        width: 140px;
        height: 70px;
        background: white;
        border-radius: 10px;
    }
`;

export const Countdown = styled.div``;

export const CTA1 = styled.button`
    padding: 15px;
    height: 50%;
    background: #F15412;
    border: none;
    border-radius: 10px;
    text-transform: uppercase;
    color: white;
    font-weight: bold;
    cursor: pointer;
`;