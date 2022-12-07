import * as React from 'react';
import {StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './src/navigation';

function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'transparent'} translucent barStyle={'dark-content'} />
      <RootNavigation/>
    </NavigationContainer>
  );
}

export default App;