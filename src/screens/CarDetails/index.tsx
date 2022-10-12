import React from 'react';
import { useNavigation } from '@react-navigation/native'

import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import SpeedSvg from '../../assets/speed.svg'
import AccelerationSvg from '../../assets/acceleration.svg'
import ForceSvg from '../../assets/force.svg'
import GasolineSvg from '../../assets/gasoline.svg'
import ExchangeSvg from '../../assets/exchange.svg'
import PeopleSvg from '../../assets/people.svg'

import { Footer, Accessories, About, Container, Header, CarImages, Content, Details, Description, Brand, Name, Rent, Period, Price} from './styles';
import { Button } from '../../components/Button';

export function CarDetails(){

    const navigation = useNavigation()

    function handleConfirmRental(){
        navigation.navigate("Scheduling")
    }

    return(
        <Container>
            <Header>
                <BackButton onPress={() => {}}/>
            </Header>
            <CarImages>
                <ImageSlider imagesUrl={['https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png']}/>

            </CarImages>
            <Content>
                <Details>
                    <Description>
                        <Brand>Lamborghini</Brand>
                        <Name>Huracan</Name>
                    </Description>
                    <Rent>
                        <Period>Ao dia</Period>
                        <Price>R$ 500</Price>
                    </Rent>
                </Details>
                <Accessories>
                    <Accessory name='380Km/H' icon={SpeedSvg}/>
                    <Accessory name='3.2s' icon={AccelerationSvg}/>
                    <Accessory name='800 HP' icon={ForceSvg}/>
                    <Accessory name='Gasolina' icon={GasolineSvg}/>
                    <Accessory name='Auto' icon={ExchangeSvg}/>
                    <Accessory name='2 Pessoas' icon={PeopleSvg}/>
                </Accessories>
                <About>
                Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
                </About>
            </Content>

            <Footer>
                <Button onPress={handleConfirmRental} title='Escolher período do aluguel'/>
            </Footer>
        </Container>
    )
}