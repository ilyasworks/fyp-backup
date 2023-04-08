import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from './settings';
import Login from './Login';
import Notifications from './Notifications';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();


function App() {

  

  return (
    <NavigationContainer >
      <Tab.Navigator screenOptions={{
         headerShown: false // hide the top title bar
        }} >
        <Tab.Screen name="Home" component={Login} 
        options={{
          tabBarIcon: ({focused})=>{
            return(
              <Ionicons name = 'home-outline' size = {26} color = {'#0099FF'} /> 
            )
          }
        }} />
        <Tab.Screen name="Settings" component={SettingsScreen} 
                options={{
                  tabBarIcon: ({focused})=>{
                    return(
                      <Ionicons name = 'settings-outline' size = {26} color = {'#0099FF'} /> 
                    )
                  }
                }} />
        <Tab.Screen name="Notification" component={Notifications} 
                options={{
                  tabBarIcon: ({focused})=>{
                    return(
                      <Ionicons name = 'notifications-outline' size = {26} color = {'#0099FF'} /> 
                    )
                  }
                }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



export default App;
