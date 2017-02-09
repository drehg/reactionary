// Android code

// import library
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumnList from './src/components/AlbumnList';

// Create Component
const App = () => (
  <View>
    <Header headerText={'Albumns'}/>
    <AlbumnList/>
  </View>
);


//Render out to device
AppRegistry.registerComponent('albumns', () => App);
