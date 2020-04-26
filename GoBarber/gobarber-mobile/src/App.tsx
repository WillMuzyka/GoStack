import 'react-native-gesture-handler'; // first line, don't change

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#312238" hidden />
    <View style={{ backgroundColor: '#312238', flex: 1 }}>
      <Routes />
    </View>
  </NavigationContainer>
);

export default App;
