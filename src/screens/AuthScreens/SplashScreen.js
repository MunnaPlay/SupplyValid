import {View, Text, Image, TouchableOpacity, Vibration} from 'react-native';
import React from 'react';
import {Logo} from '../../images';
import Theme from '../../theme';

const SplashScreen = ({navigation}) => {
  return (
    <View style={Theme.container}>
      <Image source={Logo} style={Theme.logo} />
      <View style={[Theme.splashCard, Theme.shadow]}>
        <Text style={Theme.helloText}>Hello</Text>
        <Text style={Theme.splashTitle}>Welcome</Text>
        <Text style={Theme.splashSubTitle}>
          Fulfill your commodity requirements easily at one place.
        </Text>
        <TouchableOpacity
          onPress={() => {
            Vibration.vibrate(100);
            navigation.navigate('OnboardScreen');
          }}
          style={[Theme.splashButton, Theme.shadow]}>
          <Text style={Theme.getStartedText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SplashScreen;
