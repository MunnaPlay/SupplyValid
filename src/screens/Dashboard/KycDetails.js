import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import {Header} from '../../components';
import Theme from '../../theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const KycDetails = ({navigation}) => {
  return (
    <View style={[Theme.mainContainer,{backgroundColor:'#F6F6F6'}]}>
      <Header title={'KYC Details'} navigation={navigation} isBack={true} />
      <View style={{padding:20,flex:1}}>
        <View>
          <Text style={{fontSize:16,fontWeight:'500',color:'#262626',marginBottom:5,marginLeft:5}}>Photo ID Type</Text>
          <TextInput style={{backgroundColor:'#FFFFFF',borderRadius:6,paddingLeft:10}} placeholder={'Select'} />
          <FontAwesome name='chevron-down' style={{position:'absolute',right:0,bottom:15,marginRight:10,color:'#000000'}} />
        </View>
        <View style={{marginTop:10}}>
          <Text style={{fontSize:16,fontWeight:'500',color:'#262626',marginBottom:5,marginLeft:5}}>Photo ID Number</Text>
          <TextInput style={{backgroundColor:'#FFFFFF',borderRadius:6,paddingLeft:10}} placeholder={'87786778665'} />
        </View>
        <View style={{marginTop:10}}>
          <Text style={{fontSize:13,fontWeight:'400',color:'#262626',marginBottom:5,marginLeft:5}}>Upload photo ID document</Text>
          <MaterialCommunityIcons name="image" size={60} color={'#979797'} style={{marginLeft:5}} />
          <Text style={{marginLeft:10,fontWeight:'700',color:'#000000'}}>Add More +</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('DashboardNavigation', { screen: 'HomeScreen' })} style={[Theme.SignInButton, Theme.shadow]}>
          <Text style={Theme.getStartedText}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default KycDetails