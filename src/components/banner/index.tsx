import React from "react";
import { Button, Container, DivText, StyledImage, H1 } from "./styles";
import bannerPrincipal from "../../images/banner_principal.svg"

export default function Banner() {
    return (
        <Container>
            <DivText>
                <H1>Rachi, é tudo que você precisa em um só lugar.</H1>
            <Button>
                Cadastrar-se
            </Button>
            </DivText>
            <StyledImage src={bannerPrincipal} alt="banner_principal"/>
        </Container>
    )
}