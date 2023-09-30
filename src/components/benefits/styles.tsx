import styled from 'styled-components';
import { Inter, Sora } from 'next/font/google'
import Image from "next/image";

const inter = Inter({
    weight: '600',
    style: ['normal'],
    subsets: ['latin'],
});

const sora = Sora({
    weight: '600',
    style: ['normal'],
    subsets: ['latin'],
});

export const Container = styled.div`
    background-color: white;
    width: 100%;
    height: 450px;

    @media (max-width: 768px) {
        width: 100%;
        height: 644px;
    }
`;

export const ContainerCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
   
    @media (max-width: 768px) {
        display: inline;
        justify-content: center;
        align-items: center;
    }
`;

export const Title = styled.h2`
    align-items: center;
    display: flex;
    justify-content: center; 
    font-family: ${sora};
    font-weight: 600;
    font-size: 40px;
    color: #293145;
    margin-top: 3rem;
    margin-bottom: 4rem;

    @media (max-width: 768px) {
        font-family: ${sora};
        font-weight: 600;
        font-size: 24px;
        color: #293145;
        font-size: 24px;
        margin-bottom: 32px;
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 14rem;
    margin: auto;

    &:hover {
        transform: scale(1.05);
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        margin: auto;
        width: 184px;
        margin-bottom: 32px;
    }
`;

export const CardTitle = styled.h3`
    font-size: 18px;
    font-family: ${sora};
    font-weight: 600;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
        font-size: 16px;
        margin: auto;
        margin-bottom: 4px;
        font-family: ${sora};
        font-weight: 600;
    }
`;

export const CardSubtitle = styled.h4`
    font-size: 16px;
    text-align: center;
    color: #6E7275;
    font-family: ${inter};
    font-weight: 400;

    @media (max-width: 768px) {
        font-size: 14px;
        margin: auto;
        text-align: center;
        color: #6E7275;
    }
`;

export const StyledImage = styled(Image)`
    width: 60px;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
        width: 60px;
        margin-bottom: 18px;
    }
`;