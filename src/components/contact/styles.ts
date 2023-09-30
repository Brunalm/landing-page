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
    position: relative;
    width: 100%;

    @media (max-width: 768px) {
        width: 360px;
        height: 308px;
        margin: auto; 
    }
`;

export const DivImage = styled.div `
     width: 100%;
`;

export const DesktopImage = styled(Image)`
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;

     @media (max-width: 768px) {
        display: none;
    }
`;

export const MobileImage = styled(Image)`
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;

    @media (min-width: 769px) {
        display: none;
    }
`;

export const Title = styled.h2`
    position: absolute;
    top: 4rem;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: ${sora};
    font-weight: 600;
    font-size: 40px;
    color: white;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 30px;
    }
`;

export const SubTitle = styled.h3`
    position: absolute;
    top: 10rem;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: ${inter};
    font-weight: 400;
    font-size: 19px;
    color: #DBDBDB;
    text-align: center;
    width: 528px;

    @media (max-width: 768px) {
        width: 312px;
        font-size: 14px;
        font-family: ${inter};
        font-weight: 400;
    }
`;

export const ContainerInput = styled.div`
    position: absolute;
    top: 17rem;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        align-items: center;
    }
`;

export const Input = styled.input`
    left: 40%;
    width: 300px;
    border: none;
    border-bottom: 2px solid white;
    background: transparent;
    font-size: 18px;
    padding: 5px 0;
    outline: none;
    color: white;
    margin-right: 40px;

    &::placeholder {
        color: white;
    }

    @media (max-width: 768px) {
        width: 312px;
        font-size: 14px;
        margin: 0 24px;
        color: white;
    }
`;

export const SendButton = styled.button`
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
    padding: 8px 32px 8px 32px;
    border-radius: 50px;
    color: white;
    background-color: #0F9AFE;
    border: none;

    &:hover {
    transform: scale(1.05);
    }

    @media (max-width: 768px) {
        font-size: 16px;
        padding: 8px 132px 8px 132px;
        margin-top: 38px;
    }
`;

export const DivAlert = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
`;