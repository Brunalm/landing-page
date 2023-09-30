import styled from 'styled-components';

import { Inter, Sora } from 'next/font/google'
import Image from "next/image";
 
const inter = Inter({
  weight: '600',
  style: ['normal'],
  subsets: ['latin'],
})

const sora = Sora({
    weight: '600',
    style: ['normal'],
    subsets: ['latin'],
})

export const Container = styled.div`
    background-color: #EFF8FF;
    display: flex;
    width: 100%;
    flex-grow: 1;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        height: 26rem;
        width: 100%;
    }
`;

export const H1 = styled.h1`
    font-size: 48px;
    padding-bottom: 50px;
    font-family: ${sora};
    font-weight: 600;

    @media (max-width: 768px) {
        font-size: 24px;
        padding-bottom: 30px;
    }
`;

export const DivText = styled.div`
    color: #293145;
    display: flex;
    flex-direction: column;
    padding: 10rem 0 10rem 10rem;
    font-family: ${sora};
    font-weight: 600;
    max-width: 574px;

    @media (max-width: 768px) {
        color: #293145;
        font-family: ${sora};
        font-weight: 600;
        padding: 3rem 0 1rem 3rem;
        max-width: 70%;
    }
`;

export const Button = styled.button`
    display: block; 
    background-color: #0F9AFE;
    color: white;
    border-radius: 50px;  
    border: none;
    box-shadow: 0px 2px 4px #137DE0;
    gap: 10px;
    padding: 16px 36px 16px 36px;
    width: 200px;
    font-size: 20px;
    font-family: ${inter};
    cursor: pointer;

    &:hover {
    transform: scale(1.05);
  }

    @media (max-width: 768px) {
        width: 140px;
        font-size: 14px;
        padding: 7.5px 27px 7.5px 27px;
    }
`;

export const StyledImage = styled(Image)`
    margin: 70px auto;
    width: 600px;

    @media (max-width: 768px) {
        width: 210px;
        margin: 1rem auto;
    }
`;
