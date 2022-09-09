import {AppRegistry, Text, View} from 'react-native';
import React from 'react';
import Header from './src/components/Header';
import CarList from './src/components/CarList';

const App = () => {
  return (
    <View>
      <Header title={'Cars'} />
      <CarList />
    </View>
  );
};

AppRegistry.registerComponent('cars', () => App);
