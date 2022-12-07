import { View, Text, TouchableOpacity, TextInput, FlatList } from 'react-native';
import React, {useState} from 'react';
import { ProfileSideMenu, HeaderMenu, SideMainMenu, HomeCommodities, CommoditiesFilter } from '../../components';
import Theme from '../../theme';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import {auctionData} from '../../constants';

const HomeScreen = ({navigation}) => {
  const [sideMenu, setSideMenu] = useState(false);
  const [mainSideMenu, setMainSideMenu] = useState(false);
  const [filter, setFilter] = useState(false);
  const [tab, setTab] = useState(1);
  const closeMenu = ()=>{
    setSideMenu(false);
  }

  const handleMainMenu = (status) =>{
    setMainSideMenu(status)
  }

  const renderAuctions=(item)=>{
    return(
      <View style={{flexDirection:'row',borderRadius:10,backgroundColor:'#FFFFFF'}}>
        <View style={{flex:1,padding:10}}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <FontAwesome name='star-o' size={18} />
            <Text style={{backgroundColor:'#F4A120',padding:5,marginLeft:10,borderRadius:5,color:'#FFFFFF',fontSize:15,fontWeight:'600'}}>{item.name}</Text>
            <View style={{flex:1}}>
              <Text style={{alignSelf:'flex-end',color:'#F4A120',fontSize:16,fontWeight:'600'}}>{item.type}</Text>
            </View>
          </View>
          <Text style={{color:'#434343',fontSize:13,fontWeight:'600',padding:8}}>{item.address}</Text>
          <View style={{flexDirection:'row'}}>
            <View style={{flexDirection:'row',alignItems:'center',flex:1}}>
              <FontAwesome name='tachometer' size={14} color={'#7E7E7E'} />
              <Text style={{padding:5,fontSize:14,fontWeight:'500',color:'#7E7E7E'}}>{item.mt}</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',flex:1}}>
              <FontAwesome5 name='hammer' size={14} color={'#7E7E7E'} />
              <Text style={{padding:5,fontSize:14,fontWeight:'500',color:'#7E7E7E'}}>{item.oty}</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',flex:1}}>
              <Text style={{padding:5,fontSize:14,fontWeight:'500',color:'#7E7E7E'}}>{item.endTime}</Text>
            </View>
          </View>
        </View>
        <View style={{backgroundColor:item.status=='LIVE' ? '#0DB113' : '#929292',borderTopRightRadius:10,borderBottomRightRadius:10,padding:10,justifyContent:'center'}}>
          <Text style={{fontSize:13,fontWeight:'900',color:'#FFFFFF',transform: [{ rotate: '-90deg'}]}}>{item.status}</Text>
        </View>
      </View>
    )
  }

  return (
    <View style={{flex:1,backgroundColor:'#F6F6F6'}}>
      <HeaderMenu navigation={navigation} handleMainMenu={handleMainMenu} title={'Welcome, John'} profileMenu={setSideMenu} />
      {
        sideMenu==true ? (<ProfileSideMenu closeMenu={closeMenu} navigation={navigation} />) : (<></>)
      }
      {
        mainSideMenu==true ? (<SideMainMenu navigation={navigation} handleMainMenu={handleMainMenu} />) : (<></>)
      }
      <View style={{padding:20,paddingBottom:10}}>
        <TouchableOpacity onPress={() => navigation.navigate('CreateAuction')} style={{flexDirection:'row',alignItems:'center'}}>
          <FontAwesome name="plus-circle" size={18} color='#F4A120' />
          <Text style={{color:'#434040',fontSize:18,fontWeight:'500',marginLeft:5}}>Create Auction</Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row'}}>
          <TextInput placeholder='Search...' style={[Theme.shadow,{backgroundColor:'#FFFFFF',borderRadius:5,marginTop:10,paddingLeft:20,flex:1}]} />
          <Entypo onPress={() => console.log('first')} name="magnifying-glass" size={24} color='#F4A120' style={{position:'absolute',right:10,marginTop:22}} />
        </View>
      </View>
      <HomeCommodities filter={setFilter} />
      {
        filter ?
        (<CommoditiesFilter filter={setFilter} />) : (<></>)
      }
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={() => setTab(1)} style={{flex:1,padding:10,backgroundColor:tab==1 ? '#F4A120' : '#FFFFFF'}}>
          <Text style={{textAlign:'center',fontSize:15,fontWeight:'500',color:tab==1 ? '#FFFFFF' : '#F4A120'}}>Live/Upcoming</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTab(2)} style={{flex:1,padding:10,backgroundColor:tab==1 ? '#FFFFFF' : '#F4A120'}}>
          <Text style={{textAlign:'center',fontSize:15,fontWeight:'500',color:tab==1 ? '#F4A120' : '#FFFFFF'}}>Live/Upcoming</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex:1,padding:10}}>
        {
          tab==1 ? 
          (<FlatList 
            data={auctionData}
            renderItem={(items) => renderAuctions(items.item)}
          />
          ) : 
          (<></>)
        }
        
      </View>
    </View>
  )
}

export default HomeScreen