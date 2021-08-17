import React from 'react'
import {ImageBackground, StyleSheet, Text, View } from 'react-native'
import StyleButton from '../InfoButton/StyleButton';
import { styles } from './Styles';

export default function CarItems(props) {

  const {name, tagline, image, taglineCTA} = props.car;

    return (
        <View style={styles.cardContainer}>

        <ImageBackground style={styles.image} source={image} />

        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{tagline}
          {' '}
            <Text style={styles.taglineCta}>{taglineCTA}</Text>
          </Text>
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

