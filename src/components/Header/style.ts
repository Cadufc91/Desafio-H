import styled from 'styled-components';

export const HeaderContainer = styled.div`
    background: #3A5BA0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 65px;
    color: white;
    font-size: 20px;
    font-weight: bold;

    img{
        width: 90px;
        height: 90px;
        background: white;
        border-radius: 10px;
    }
`;

export const CountdownTimer = styled.div`
    color: white;
`;

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