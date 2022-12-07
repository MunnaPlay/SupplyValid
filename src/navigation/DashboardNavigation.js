import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, EditProfile, AccountDetails, OrganizationDetails, KycDetails, Settings, Notification, CreateAuction} from '../screens/Dashboard';

const AppStack = createNativeStackNavigator();

function DashboardNavigation() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="HomeScreen"
        options={{headerShown: false}}
        component={HomeScreen}
      />
      <AppStack.Screen
        name="EditProfile"
        options={{headerShown: false}}
        component={EditProfile}
      />
      <AppStack.Screen
        name="AccountDetails"
        options={{headerShown: false}}
        component={AccountDetails}
      />
      <AppStack.Screen
        name="OrganizationDetails"
        options={{headerShown: false}}
        component={OrganizationDetails}
      />
      <AppStack.Screen
        name="KycDetails"
        options={{headerShown: false}}
        component={KycDetails}
      />
      <AppStack.Screen
        name="Settings"
        options={{headerShown: false}}
        component={Settings}
      />
      <AppStack.Screen
        name="Notification"
        options={{headerShown: false}}
        component={Notification}
      />
      <AppStack.Screen
        name="CreateAuction"
        options={{headerShown: false}}
        component={CreateAuction}
      />
    </AppStack.Navigator>
  );
}

export default DashboardNavigation;