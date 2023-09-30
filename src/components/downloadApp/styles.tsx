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
  })

export const Container = styled.div`
    background-color: #EFF8FF;
    width: 100%;
    height: 476px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
        display: flex;
        width: 100%;
        height: 300px;
    }
`;

export const ContainerText = styled.div`
    display: flex;
    align-items: left;
    flex-direction: column;
    margin-top: 117px;
    margin-bottom: 124px;
    margin-left: 135px;

    @media (max-width: 768px) {
        display: flex;
        width: 100%;
        height: 260px;
        margin: auto;
        align-items: center;
    }
`;

export const Title = styled.h2`
    font-family: ${sora};
    font-weight: 600;
    font-size: 32px;
    color: #293145;
    width: 600px;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
        font-family: ${sora};
        font-weight: 600;
        font-size: 24px;
        width: 245px;
        margin: 1rem;
        text-align: center;
    }
`;

export const SubTitle = styled.h3`
    font-size: 16px;
    text-align: left;
    color: #6E7275;
    width: 440px;
    margin-bottom: 2rem;
    font-family: ${inter};
    font-weight: 400;

    @media (max-width: 768px) {
        text-align: center;
        color: #6E7275;
        font-size: 14px;
        width: 312px;
    }
`;

export const StyledButton = styled.button`
    border: none;
    background: none;
`;

export const ContainerImage = styled.div`
    flex-direction: row;
`;

export const StyledImage = styled(Image)`
    width: 172px;
    height: 60px;
    cursor: pointer;

    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

export const MobileStyledImage = styled(Image)`
    width: 144px;
    height: 32px;
    margin: 1rem;

    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }

    @media (min-width: 769px) {
        display: none;
    }
`;


export const SocialMediaImage = styled(Image)`
    width: 400px;
    margin: auto;

    @media (max-width: 768px) {
        display: none;
    }
`;

