import React from 'react'
import { StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RFValue } from 'react-native-responsive-fontsize'

import Logo from '../../assets/logo.svg'
import { Car } from '../../components/Car'

import { Container, Header, TotalCars, HeaderContent, CarsList } from './styles'

export function Home(){
    
    const navigation = useNavigation()
    
    const carData = {
        brand: 'Audi',
        name: 'RS 5 Coupe',
        rent: {
            period: 'Ao dia',
            price: 150
        },
        thumbnail: 'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png'
    }

    function handleCarDetails(){
        navigation.navigate('CarDetails')
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
            <CarsList data={[1, 2, 3, 4, 5, 6, 7, 8]} keyExtractor={item => String(item)} renderItem={({item}) => <Car data={carData} onPress={handleCarDetails}/>}/>
                
        </Container>
    )
}