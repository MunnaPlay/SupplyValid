import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import {Header} from '../../components';
import Theme from '../../theme';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const OrganizationDetails = ({navigation}) => {
  return (
    <View style={[Theme.mainContainer,{backgroundColor:'#F6F6F6'}]}>
      <Header title={'Organization Details'} navigation={navigation} isBack={true} />
      <ScrollView style={{padding:20}}>
        <View>
          <Text style={{fontSize:16,fontWeight:'500',color:'#262626',marginBottom:5,marginLeft:5}}>Organization Type</Text>
          <TextInput style={{backgroundColor:'#FFFFFF',borderRadius:6,paddingLeft:10}} placeholder={'John Doe'} />
          <FontAwesome name='chevron-down' style={{position:'absolute',right:0,bottom:15,marginRight:10,color:'#000000'}} />
        </View>
        <View style={{marginTop:10}}>
          <Text style={{fontSize:16,fontWeight:'500',color:'#262626',marginBottom:5,marginLeft:5}}>Organization Name</Text>
          <TextInput style={{backgroundColor:'#FFFFFF',borderRadius:6,paddingLeft:10}} placeholder={'John Doe'} />
        </View>
        <View style={{marginTop:10}}>
          <Text style={{fontSize:16,fontWeight:'500',color:'#262626',marginBottom:5,marginLeft:5}}>Email Address</Text>
          <TextInput style={{backgroundColor:'#FFFFFF',borderRadius:6,paddingLeft:10}} placeholder={'john.doe@domain.tld'} />
        </View>
        <View style={{marginTop:10}}>
          <Text style={{fontSize:16,fontWeight:'500',color:'#262626',marginBottom:5,marginLeft:5}}>Mobile Number</Text>
          <TextInput style={{backgroundColor:'#FFFFFF',borderRadius:6,paddingLeft:10}} placeholder={'999999999'} />
        </View>
        <View style={{marginTop:10}}>
          <Text style={{fontSize:16,fontWeight:'500',color:'#262626',marginBottom:5,marginLeft:5}}>Registered Address:</Text>
          <TextInput style={{backgroundColor:'#FFFFFF',borderRadius:6,paddingLeft:10}} placeholder={'Complete Address Here'} />
        </View>
        <View style={{marginTop:10}}>
          <Text style={{fontSize:16,fontWeight:'500',color:'#262626',marginBottom:5,marginLeft:5}}>State</Text>
          <TextInput style={{backgroundColor:'#FFFFFF',borderRadius:6,paddingLeft:10}} placeholder={'New Delhi'} />
          <FontAwesome name='chevron-down' style={{position:'absolute',right:0,bottom:15,marginRight:10,color:'#000000'}} />
        </View>
        <View style={{marginTop:10}}>
          <Text style={{fontSize:16,fontWeight:'500',color:'#262626',marginBottom:5,marginLeft:5}}>District</Text>
          <TextInput style={{backgroundColor:'#FFFFFF',borderRadius:6,paddingLeft:10}} placeholder={'New Delhi'} />
          <FontAwesome name='chevron-down' style={{position:'absolute',right:0,bottom:15,marginRight:10,color:'#000000'}} />
        </View>
        <View style={{marginTop:10}}>
          <Text style={{fontSize:16,fontWeight:'500',color:'#262626',marginBottom:5,marginLeft:5}}>City/Village</Text>
          <TextInput style={{backgroundColor:'#FFFFFF',borderRadius:6,paddingLeft:10}} placeholder={'XYZ'} />
        </View>
        <View style={{marginTop:10}}>
          <Text style={{fontSize:16,fontWeight:'500',color:'#262626',marginBottom:5,marginLeft:5}}>Pincode</Text>
          <TextInput style={{backgroundColor:'#FFFFFF',borderRadius:6,paddingLeft:10}} placeholder={'110017'} />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('DashboardNavigation', { screen: 'HomeScreen' })} style={[Theme.SignInButton, Theme.shadow]}>
          <Text style={Theme.getStartedText}>Update</Text>
        </TouchableOpacity>
        <View style={{height:50}}></View>
      </ScrollView>
    </View>
  )
}

export default OrganizationDetails