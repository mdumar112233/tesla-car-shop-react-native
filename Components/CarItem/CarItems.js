import React from 'react'
import {ImageBackground, StyleSheet, Text, View } from 'react-native'
import { styles } from './Styles';

export default function CarItems() {
    return (
        <View style={styles.cardContainer}>

        <ImageBackground style={styles.image} source={require('../../assets/ModelX.jpeg')} />

        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subtitle}>Starting at $69,432</Text>
        </View>
    </View>
    )
}

