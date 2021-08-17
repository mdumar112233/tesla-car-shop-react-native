import React from 'react'
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import { styles } from './Styles';
import { car } from './cars';
import CarItems from '../CarItem/CarItems';

export default function AllCar() {
    console.log(car)
    return (
        <View style={styles.container}>
            <FlatList 
                data = {car}
                renderItem={({item}) => <CarItems car={item}></CarItems>}
                showsVerticalScrollIndicator = {false}
                snapToAlignment={'start'}
                decelerationRate = {'fast'}
                snapToInterval = {Dimensions.get('window').height}
            />
        </View>
    )
}

