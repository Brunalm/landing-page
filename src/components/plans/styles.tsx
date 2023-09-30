import styled from 'styled-components';
import { Inter, Sora, Roboto } from 'next/font/google';

interface CardTitleProps {
    fontSize?: string;
}

interface CardProps {
    backgroundColor?: string;
    textColor?: string;
}

const sora = Sora({
    weight: '600',
    style: ['normal'],
    subsets: ['latin'],
 });

 const inter = Inter({
    weight: '600',
    style: ['normal'],
    subsets: ['latin'],
  });

 const roboto = Roboto({
    weight: '700',
    style: ['normal'],
    subsets: ['latin'],
 });

export const Container = styled.div`
    background-color: white;
    width: 100%;
    height: 850px;

    @media (max-width: 768px) {
        width: 100%;
        height: 1420px;
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
    margin-bottom: 16px;

    @media (max-width: 768px) {
        font-family: ${sora};
        font-weight: 600;
        font-size: 24px;
        color: #293145;
        font-size: 24px;
        margin-top: 2rem;
    }
`;

export const SubTitle = styled.h3`
    display: flex;
    font-size: 16px;
    text-align: center;
    color: #6E7275;
    width: 440px;
    margin: auto;
    font-family: ${inter};
    font-weight: 400;

    @media (max-width: 768px) {
        text-align: center;
        color: #6E7275;
        font-size: 14px;
        width: 312px;
        font-family: ${inter};
        font-weight: 400;
    }
`;

export const ContainerCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    margin: 96px 135px 0 135px;
   
    @media (max-width: 768px) {
        display: inline;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
    }
`;

export const Card = styled.div<CardProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 22rem;
    margin: auto;
    background-color: ${props => props.backgroundColor};
    border-radius: 8px;
    height: 470px;
    color: ${props => props.textColor};

    &:hover {
    transform: scale(1.05);
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        margin: auto;
        width: 312px;
        margin-bottom: 32px;
        height: 380px;
    }
`;

export const ContainerCardTitle = styled.div`
    display: flex;
    flex-direction: column;
    height: 145px;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        height: 80px;
        margin-bottom: 2rem;
    }
`;

export const CardTitle = styled.text<CardTitleProps>`
    font-size: ${props => props.fontSize};
    font-family: ${sora};
    font-weight: 600;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 24px;
        margin: auto;
        margin-bottom: 4px;
        font-family: ${sora};
        font-weight: 600;
    }
`;

export const CardTag = styled.text`
    font-size: 14px;
    color: white;
    background-color: #0F9AFE;
    padding: 5px 32px 5px 32px;
    border-radius: 15px;
    margin-top: 0.3rem;
`

export const ContainerValue = styled.div`
    display: flex;
    align-items: flex-end;
`;

export const Money = styled.text`
    font-size: 20px;
`;

export const Numbers = styled.text`
    font-size: 50px;
    display: block;
    line-height: 1;
`;

export const Month = styled.text`
    font-size: 26px;
`

export const Price = styled.div`
    display: flex;
    font-family: ${roboto};
    font-weight: 700;
`;

export const CardDescription = styled.div`
    font-size: 18px;
    text-align: center;
    font-family: ${inter};
    font-weight: 400;
    margin: 30px 35px 0 35px;

    @media (max-width: 768px) {
        font-size: 16px;
        font-family: ${inter};
        font-weight: 400;
    }
`;

export const SignButton = styled.button`
    font-size: 20px;
    padding: 8px 80px 8px 80px;
    border-radius: 50px;
    color: white;
    background-color: #0F9AFE;
    margin-top: 58px;
    box-shadow: 1px 3px 4px 0 #137DE080;
    border: none;
    cursor: pointer;

    @media (max-width: 768px) {
        font-size: 16px;
        margin-top: 30px;
    }
`;