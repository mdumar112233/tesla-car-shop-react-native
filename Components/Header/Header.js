import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { styles } from './Styles'

export default function Header() {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/logo.png')} />
            <Image style={styles.menu} source={require('../../assets/menu.png')} />
        </View>
    )
}

