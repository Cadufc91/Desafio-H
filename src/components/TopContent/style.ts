import styled from "styled-components";

export const TopContentContainer = styled.div`
    margin: 0 45px;
`;
    
export const Management = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    img{
        width: 40%;
        margin-top: 40px;
    }

    div{
        display: flex;
        flex-direction: column;
        width: 50%;
        margin-left: 25px;
    }

    h1{
        font-style: italic;
        font-weight: 400;
    }
`;

export const Tools = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .content{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 40px;
    }

    h1{
        font-style: italic;
        font-weight: 400;
    }

    span{
        width: 50%;
    }

    .images{
        width: 50%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;

        img{
            width: 35%;
            padding: 30px;
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
`;