import React from "react";
import { TouchableOpacityProps } from "react-native";
import GasolineSvg from '../../assets/gasoline.svg'

import { CarImage, Type, Container, Details, Brand, Name, About, Rent, Period, Price } from "./styles";

interface CarData{
    brand: string,
    name: string,
    rent: {
        period: string,
        price: number,
    },
    thumbnail: string
}

interface Props extends TouchableOpacityProps{
    data: CarData;
}

export function Car({data, ...rest}: Props){
    return(
        <Container {...rest}>
            <Details>
                <Brand>{data.brand}</Brand>
                <Name>{data.name}</Name>

                <About>
                    <Rent>
                        <Period>{data.rent.period}</Period>
                        <Price>{`R$ ${data.rent.price}`}</Price>
                    </Rent>
                    <Type><GasolineSvg/></Type>
                </About>
            </Details>
            <CarImage source={{uri: data.thumbnail}} resizeMode="contain"/>
        </Container>
    )
}