import styled from 'styled-components';

import { Inter } from 'next/font/google'
 
const inter = Inter({
  weight: '600',
  style: ['normal'],
  subsets: ['latin'],
})

export const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: white;
    font-family: ${inter};
    align-items: center;
    padding: 1rem 10rem;

    @media (max-width: 768px) {
        padding: 1rem 2rem;
    }
`;

export const StyledNav = styled.nav`
    @media (max-width: 768px) {
         display: none;
     }
`;

export const StyledUl = styled.ul`
    list-style: none;
    display: flex;
    padding: 0;
    gap: 4.125rem;
    color: #6E7275;
    font-weight: bold;
    font-size: 18px;
    align-items: center;
    font-weight: 500;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const StyledLink = styled.a`
    text-decoration: none;
    cursor: pointer;
    href: ${props => props.href};

    &:hover {
    color: #293145;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

export const DivMenu = styled.nav`
    display: block;

    @media (min-width: 769px) {
        display: none;
    }
`;
