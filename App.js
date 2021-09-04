import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ContaBanco from './features/ContaBanco/ContaBanco';

const App = () => {
  return (
    <ContaBanco
      size={30}
      Orange = {"#DF7401"}
    />
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6E6',
  }, 
});




