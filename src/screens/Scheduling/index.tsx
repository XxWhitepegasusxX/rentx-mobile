import React from "react";

import { BackButton } from "../../components/BackButton";
import { DateValue, DateTitle, DateInfo, RentalPeriod, Container, Header, Title, Content, Footer } from "./styles";

import ArrowSvg from '../../assets/arrow.svg'

import { useTheme } from "styled-components";
import { StatusBar } from "react-native";
import { Button } from "../../components/Button";
import { Calendar } from "../../components/Calendar";

export function Scheduling(){
    const theme = useTheme();

    return(
        <Container>
            <Header>
                <StatusBar barStyle='light-content' translucent backgroundColor='transparent' />
                <BackButton color={theme.colors.shape} onPress={() => {}}/>
                <Title>
                    Escolha uma{'\n'}
                    data de início e{'\n'}
                    fim do aluguel
                </Title>
                <RentalPeriod>
                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue selected={false} >18/06/2022</DateValue>
                    </DateInfo>

                    <ArrowSvg/>

                    <DateInfo>
                        <DateTitle>ATÉ</DateTitle>
                        <DateValue selected={false} >18/06/2022</DateValue>
                    </DateInfo>
                </RentalPeriod>
            </Header>
            <Content>
                <Calendar/>
            </Content>
            <Footer>
                <Button title="Confirmar"/>
            </Footer>
        </Container>
    )
}