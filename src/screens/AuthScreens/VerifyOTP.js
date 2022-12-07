import {View, Text, TouchableOpacity, Vibration} from 'react-native';
import React, {useState} from 'react';
import Theme from '../../theme';
import {TitleBar} from '../../components';
import OtpInputs from 'react-native-otp-inputs';

const VerifyOTP = ({navigation, route}) => {
  console.log(route);
  const [otp, setOTP] = useState();

  const setVerifyCode = code => {
    if (code.length == 6) {
      setOTP(code);
    }
  };
  return (
    <View style={Theme.mainContainer}>
      <TitleBar navigation={navigation} />
      <View style={Theme.SendOTP}>
        <View style={Theme.otpContent}>
          <Text style={Theme.splashTitle}>Verification Code</Text>
          <Text style={Theme.splashSubTitle}>
            Enter the Verification code to complete Sign in.
          </Text>
          <View style={{height: 50, marginTop: 20}}>
            <OtpInputs
              placeholder="_"
              inputStyles={[
                {
                  backgroundColor: '#F8F8F8',
                  borderRadius: 6,
                  width: 40,
                  textAlign: 'center',
                },
                Theme.shadow,
              ]}
              handleChange={code => setVerifyCode(code)}
              numberOfInputs={6}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              Vibration.vibrate(100);
              navigation.navigate('DashboardNavigation', {
                screen: 'HomeScreen',
              });
            }}
            style={[Theme.SignInButton, Theme.shadow]}>
            <Text style={Theme.getStartedText}>Submit</Text>
          </TouchableOpacity>
          <Text style={{marginTop: 20, textAlign: 'center'}}>
            Didn't get Verification code?{' '}
            <Text style={{color: '#FF7B00'}}>Resend Code</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default VerifyOTP;
