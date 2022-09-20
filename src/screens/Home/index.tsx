import React from 'react'
import { StatusBar } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import Logo from '../../assets/logo.svg'
import { Car } from '../../components/Car'

import { Container, Header, TotalCars, HeaderContent } from './styles'

export function Home(){
    const carData = {
        brand: 'Audi',
        name: 'RS 5 Coupe',
        rent: {
            period: 'Ao dia',
            price: 150
        },
        thumbnail: 'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png'
    }
    const carDataTwo = {
        brand: 'Porsche',
        name: 'Panamera',
        rent: {
            period: 'Ao dia',
            price: 340
        },
        thumbnail: 'https://pngkit.com/png/full/237-2375888_porsche-panamera-5.png'
    }

    return(
        <Container>
            <StatusBar barStyle='light-content' backgroundColor={"transparent"} translucent/>
            <Header>
                <HeaderContent>
                    <Logo width={RFValue(108)} height={RFValue(12)} />
                    <TotalCars>Total 12 carros</TotalCars>
                </HeaderContent>
            </Header>
            <Car data={carData}/>
            <Car data={carDataTwo}/>
        </Container>
    )
}