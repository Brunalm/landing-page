import React, { useState } from "react";
import { Container, ContainerInput, DesktopImage, DivAlert, DivImage, Input, MobileImage, SendButton, SubTitle, Title} from "./styles";
import contact from "../../images/contact.svg"
import contactMobile from "../../images/contact_mobile.svg";
import { Alert } from "evergreen-ui";

export default function ContactUs() {
    const [email, setEmail] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [showError, setShowError] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
      };

    function validarEmail(email: string): boolean {
        const regex: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      
        return regex.test(email);
    }

    function handleClick() {

        if(!validarEmail(email)) {
           setShowError(true);
           return setTimeout(() => {
            setShowError(false);
        }, 3000);
        
        }

        setShowAlert(true);

        setTimeout(() => {
            setShowAlert(false);
        }, 3000);
    }

    return (
        <div>
            {showAlert && (
                <DivAlert>
                    <Alert
                    intent="success"
                    title="Sua mensagem foi enviada com sucesso!"
                    marginBottom={16}
                    />
                </DivAlert>
             )}

            {showError && (
                <DivAlert>
                    <Alert
                    intent="danger"
                    title="Por favor, insira um e-mail válido"
                    marginBottom={16}
                    />
                </DivAlert>
             )}

            <Container>
                <DivImage>
                    <MobileImage src={contactMobile} alt="contact_mobile" fill={true}/>
                    <DesktopImage src={contact} alt="contact" fill={true} />
                </DivImage>

                <Title>Contato</Title>

                <SubTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Donec lacinia mi quis euismod ultrices.</SubTitle>
                <ContainerInput>
                    
                    <Input 
                    type="email"
                    value={email}
                    onChange={handleInputChange}
                    placeholder="Digite seu e-mail"
                    />
                    <SendButton onClick={handleClick}>Enviar</SendButton>  
                </ContainerInput>
            </Container>
        </div>
    )
}