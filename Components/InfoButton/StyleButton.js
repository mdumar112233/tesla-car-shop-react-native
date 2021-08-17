import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { styles } from './Styles'

export default function StyleButton(props) {
    const type = props.type;
    const content = props.content;
    const onPress = props.onPress;
    console.log(type)

    const background = type === 'primary' ? '#171A28CC': '#ffffffA6';
    const textColor = type === 'primary' ? 'white': 'black';
    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, {backgroundColor: background}]}
                onPress={() => onPress()}
            >
                <Text style={[styles.cusBtnText, {color: textColor}]}>{content}</Text>
            </Pressable>
        </View>
    )
}

