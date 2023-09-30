import React from "react";
import { Card, Container, ContainerCard, Title, SubTitle, CardTitle, CardTag, ContainerCardTitle, Price, Money, Numbers, Month, SignButton, CardDescription, ContainerValue } from "./styles";

const CARD_ITEMS = [
    {
        id: 1,
        title: "Bronze",
        number: "28",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.",
    },
    {
        id: 2,
        title: "Prata",
        number: "57",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.",
        hasTag: true,
        backgroundColor: "#293145",
        textColor: "white",
        fontSize: "32px",
    },
    {
        id: 3,
        title: "Ouro",
        number: "94",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.",
    }
]

export default function Plans() {
    return (
        <Container>
           <Title>Nossos Planos</Title>
           <SubTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Donec lacinia mi quis euismod ultrices.</SubTitle>

            <ContainerCard>
            {CARD_ITEMS.map(item => (
                <Card backgroundColor={item.backgroundColor || "#EFF8FF"} textColor={item.textColor || "#293145"} key={item.id}>
                <ContainerCardTitle>
                    <CardTitle  fontSize={item.fontSize || "24px"}>{item.title}</CardTitle>
                    {item.hasTag && <CardTag>PREFERIDO</CardTag>}
                </ContainerCardTitle>

                <Price>
                    <Money>R$</Money>
                    <ContainerValue>
                        <Numbers>{item.number}</Numbers>
                        <Month>/mês</Month>
                    </ContainerValue>
                </Price>

                <CardDescription>
                    {item.description}
                </CardDescription>

                <SignButton>Assinar</SignButton>
            </Card>
            ))}
            </ContainerCard>
        </Container>
    )
}