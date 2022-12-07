import {View, Text, TextInput, TouchableOpacity, Vibration} from 'react-native';
import React from 'react';
import Theme from '../../theme';
import {TitleBar} from '../../components';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SendOTP = ({navigation}) => {
  return (
    <View style={Theme.mainContainer}>
      <TitleBar navigation={navigation} />
      <View style={Theme.SendOTP}>
        <View style={Theme.otpContent}>
          <Text style={Theme.splashTitle}>Start with Phone Number</Text>
          <Text style={Theme.splashSubTitle}>
            You will get a code via SMS. Operator rates may apply.
          </Text>
          <View style={[Theme.mobileInput]}>
            <FontAwesome name="mobile-phone" size={32} color={'#434040'} />
            <TextInput
              placeholder="Mobile Number"
              keyboardType="number-pad"
              maxLength={10}
              placeholderTextColor={'#FF7B00'}
              style={{marginLeft: 8, fontSize: 18, color: '#FF7B00'}}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              Vibration.vibrate(100);
              navigation.navigate('VerifyOTP');
            }}
            style={[Theme.SignInButton, Theme.shadow]}>
            <Text style={Theme.getStartedText}>Next</Text>
          </TouchableOpacity>
          <Text style={{marginTop: 20, textAlign: 'center'}}>
            By signing up, you agree to our{' '}
            <Text style={{color: '#FF7B00'}}>Terms</Text> and{' '}
            <Text style={{color: '#FF7B00'}}>Conditions of Use</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SendOTP;
