import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import {Header} from '../../components';
import Theme from '../../theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AccountDetails = ({navigation}) => {
  return (
    <View style={[Theme.mainContainer,{backgroundColor:'#F6F6F6'}]}>
      <Header title={'Account Details'} navigation={navigation} isBack={true} />
      <ScrollView style={{padding:20}}>
        <View>
          <Text style={{fontSize:16,fontWeight:'500',color:'#262626',marginBottom:5,marginLeft:5}}>Bank Name</Text>
          <TextInput style={{backgroundColor:'#FFFFFF',borderRadius:6,paddingLeft:10}} placeholder={'State Bank of India'} />
        </View>
        <View style={{marginTop:10}}>
          <Text style={{fontSize:16,fontWeight:'500',color:'#262626',marginBottom:5,marginLeft:5}}>Account Holder Name</Text>
          <TextInput style={{backgroundColor:'#FFFFFF',borderRadius:6,paddingLeft:10}} placeholder={'John Doe'} />
        </View>
        <View style={{marginTop:10}}>
          <Text style={{fontSize:16,fontWeight:'500',color:'#262626',marginBottom:5,marginLeft:5}}>Account Number</Text>
          <TextInput style={{backgroundColor:'#FFFFFF',borderRadius:6,paddingLeft:10}} placeholder={'7767655454434343'} />
        </View>
        <View style={{marginTop:10}}>
          <Text style={{fontSize:16,fontWeight:'500',color:'#262626',marginBottom:5,marginLeft:5}}>IFSC Code</Text>
          <TextInput style={{backgroundColor:'#FFFFFF',borderRadius:6,paddingLeft:10}} placeholder={'SBIN1029'} />
        </View>
        <View style={{marginTop:10}}>
          <Text style={{fontSize:13,fontWeight:'400',color:'#262626',marginBottom:5,marginLeft:5}}>Upload Passbook/Cancel Cheque copy</Text>
          <MaterialCommunityIcons name="image" size={60} color={'#979797'} style={{marginLeft:5}} />
          <Text style={{marginLeft:10,fontWeight:'700',color:'#000000'}}>Add More +</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('DashboardNavigation', { screen: 'HomeScreen' })} style={[Theme.SignInButton, Theme.shadow]}>
          <Text style={Theme.getStartedText}>Update</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default AccountDetails