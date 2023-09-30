import React from "react";
import { Card, CardSubtitle, CardTitle, Container, ContainerCard, Title, StyledImage } from "./styles";
import person from "../../images/person.svg";
import security from "../../images/security.svg";
import happy from "../../images/happy.svg";

const BENEFITS_ITEMS = [
    {
        id: 1,
        title: 'Crie conexões',
        subtitle: 'Lorem ipsum dolor sit amet, consecteteu',
        src: person, 
        alt: 'person_icon'
    },
    {
        id: 2,
        title: '100% gratuito',
        subtitle: 'Lorem ipsum dolor sit amet, consecteteu',
        src: security, 
        alt: 'security_icon'
    },
    {
        id: 3,
        title: 'Compartilhamento',
        subtitle: 'Lorem ipsum dolor sit amet, consecteteu',
        src: happy, 
        alt: 'happy_face_icon'
    },
]

export default function Benefits() {
    return (
        <Container>
           <Title>Como funciona</Title>

            <ContainerCard>

            {BENEFITS_ITEMS.map(item => (
                 <Card key={item.id}>
                 <StyledImage src={item.src} alt={item.alt} />
                 <CardTitle>{item.title}</CardTitle>
                 <CardSubtitle>{item.subtitle}</CardSubtitle>
             </Card>
            ))}

            </ContainerCard>
        </Container>
    )
}