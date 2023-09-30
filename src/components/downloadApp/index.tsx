import React from "react";
import { Container, ContainerImage, ContainerText, MobileStyledImage, SocialMediaImage, StyledButton, StyledImage, SubTitle, Title } from "./styles";
import googlePlay from '../../images/google_play.svg'
import appleStore from '../../images/apple_store.svg'
import socialMedia from '../../images/social_media.svg'
import mobileGooglePlay from '../../images/mobile_google_play.svg';
import mobileAppleStore from '../../images/mobile_apple_store.svg';

export default function DownloadApp() {
    return (
        <Container>
            <ContainerText>
                <Title>Baixe nosso app para desfrutar mais!</Title>

                <SubTitle>Amet in elementum nulla scelerisque dui, egestas at. 
                Elit consectetur turpis elementum amet vitae et etiam nec. 
                Varius volutpat hac adipiscing tincidunt pretium.</SubTitle>
                
                <ContainerImage>
                    <StyledButton><StyledImage src={googlePlay} alt="google_play" /></StyledButton>
                    <StyledButton><StyledImage src={appleStore} alt="apple_store" /></StyledButton>
                    <StyledButton><MobileStyledImage src={mobileGooglePlay} alt="mobile_google_play" /></StyledButton>
                    <StyledButton><MobileStyledImage src={mobileAppleStore} alt="mobile_apple_store" /></StyledButton>
                </ContainerImage>
            </ContainerText>

            <SocialMediaImage src={socialMedia} alt="social_media" />
        </Container>
    )
}