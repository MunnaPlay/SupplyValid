import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigation from './AuthNavigation';
import DashboardNavigation from './DashboardNavigation'

const RootStack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="AuthNavigation"
        options={{headerShown: false}}
        component={AuthNavigation}
      />
      <RootStack.Screen
        name="DashboardNavigation"
        options={{headerShown: false}}
        component={DashboardNavigation}
      />
    </RootStack.Navigator>
  );
}

export default RootNavigation;
