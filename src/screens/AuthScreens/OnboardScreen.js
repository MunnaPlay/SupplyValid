import {View, Text, Image, TouchableOpacity, Vibration} from 'react-native';
import React from 'react';
import Theme from '../../theme';
import {Farmer} from '../../images';

const OnboardScreen = ({navigation}) => {
  return (
    <View style={[Theme.container, {backgroundColor: '#FFFFFF'}]}>
      <Image source={Farmer} style={Theme.FarmerImage} />
      <Text style={Theme.splashTitle}>The Future of Agro Innovation</Text>
      <Text style={Theme.splashSubTitle}>
        When the seed of an idea takes root in the human mind, the possibilities
        are ENDLESS.
      </Text>
      <TouchableOpacity
        onPress={() => {
          Vibration.vibrate(100);
          navigation.navigate('SendOTP');
        }}
        style={[Theme.SignInButton, Theme.shadow]}>
        <Text style={Theme.getStartedText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          Vibration.vibrate(100);
          navigation.navigate('SendOTP');
        }}
        style={[
          Theme.SignInButton,
          Theme.shadow,
          {backgroundColor: '#FFFFFF'},
        ]}>
        <Text style={[Theme.getStartedText, {color: '#F4A120'}]}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnboardScreen;
