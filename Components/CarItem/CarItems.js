import React from 'react'
import {ImageBackground, StyleSheet, Text, View } from 'react-native'
import StyleButton from '../InfoButton/StyleButton';
import { styles } from './Styles';

export default function CarItems() {
    return (
        <View style={styles.cardContainer}>

        <ImageBackground style={styles.image} source={require('../../assets/ModelX.jpeg')} />

        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subtitle}>Starting at $69,432</Text>
        </View>

        <View style={styles.buttonContainer}>
          <StyleButton 
            type='primary' 
            content={'Custom Order'}
            onPress={()=> console.log('custom order')}  
          />

         <StyleButton 
            type='secondary' 
            content={'Existing Inventory'}
            onPress={()=> console.log('Existing')}  
          />
        </View>
    </View>
    )
}

