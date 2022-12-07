import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen, OnboardScreen, SendOTP, VerifyOTP} from '../screens/AuthScreens';

const AuthStack = createNativeStackNavigator();

function AuthNavigation() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SplashScreen"
        options={{headerShown: false}}
        component={SplashScreen}
      />
      <AuthStack.Screen
        name="OnboardScreen"
        options={{headerShown: false}}
        component={OnboardScreen}
      />
      <AuthStack.Screen
        name="SendOTP"
        options={{headerShown: false}}
        component={SendOTP}
      />
      <AuthStack.Screen
        name="VerifyOTP"
        options={{headerShown: false}}
        component={VerifyOTP}
      />
    </AuthStack.Navigator>
  );
}

export default AuthNavigation;