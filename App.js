import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import AllCar from './Components/CarList/AllCar';
import Header from './Components/Header/Header';

export default function App() {
  return (
    <View style={styles.container}>
        <Header/>
        <AllCar/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
