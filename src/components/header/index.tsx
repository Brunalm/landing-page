import React from "react";
import logo from "../../images/rachi_logo.svg"
import hamburguerMenu from "../../images/hamburguer_menu.svg"
import { ContainerHeader, DivMenu, StyledLink, StyledNav, StyledUl } from "./styles";
import Image from "next/image";

const MENU_ITEMS = [
    { 
        id: 1,
        name: 'Funcionalidades',
        link: '',
     },
    { 
        id: 2,
        name: 'App',
        link: '',
     },
    { 
        id: 3,
        name: 'Planos',
        link: '',
     },
    { 
        id: 4,
        name: 'Contato',
        link: '',
     },
]

export default function Header() {
    return (
        <ContainerHeader>
                <Image src={logo} alt="logo_header" />
            <DivMenu>
                <Image src={hamburguerMenu} alt="menu" />
            </DivMenu>

            <StyledNav>
                <StyledUl>
                    {MENU_ITEMS.map(item => (
                        <li key={item.id}>
                            <StyledLink href={item.link}>{item.name}</StyledLink>
                        </li>
                    ))}
                </StyledUl>
            </StyledNav>
        </ContainerHeader>
    )
}