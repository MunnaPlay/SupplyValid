import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import {Header} from '../../components';
import Theme from '../../theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Notification = ({navigation}) => {
  return (
    <View style={[Theme.mainContainer,{backgroundColor:'#F6F6F6'}]}>
      <Header title={'Notifications'} navigation={navigation} isBack={true} />
      <View style={{padding:20,flex:1}}>
        <View>
          <Text style={{fontSize:26,fontWeight:'500',color:'#262626',marginBottom:5,marginLeft:5}}>Notifications</Text>
        </View>
        <View style={{marginTop:10}}>
          <Text style={{fontSize:13,color:'#262626',marginBottom:5,marginLeft:5}}>01-Auction TR22062727934 has been Published. Approved successfully.</Text>
        </View>
        <View style={{marginTop:10}}>
          <Text style={{fontSize:13,color:'#262626',marginBottom:5,marginLeft:5}}>Auction created successfully and approval is pending on administrator side. You will be notified once it gets approved.</Text>
        </View>
      </View>
    </View>
  )
}

export default Notification