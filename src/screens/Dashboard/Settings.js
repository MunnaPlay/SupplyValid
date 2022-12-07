import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import {Header} from '../../components';
import Theme from '../../theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Settings = ({navigation}) => {
  return (
    <View style={[Theme.mainContainer,{backgroundColor:'#F6F6F6'}]}>
      <Header title={'Settings'} navigation={navigation} isBack={true} />
      <View style={{padding:20,flex:1}}>
        
        <View style={{marginTop:10}}>
          <Text style={{fontSize:12,color:'#000000',marginBottom:5,marginLeft:5}}>I agree to share my contact information in my SupplyValid profile with the Support representative. I have read, understand and agreed to abide by the Terms and Conditions governing SupplyValid. <Text style={{color:'#B47006'}}>Terms of Use</Text></Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('DashboardNavigation', { screen: 'HomeScreen' })} style={[Theme.SignInButton, Theme.shadow]}>
          <Text style={Theme.getStartedText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Settings