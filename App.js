import * as React from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {CustomHeader, CustomDrawerContent} from './src';
import {HomeScreen, HomeScreenDetail, EventScreen, EventScreenDetail, MensScreen, MensScreenDetail, WarriorScreen, WarriorScreenDetail, ResourceScreen } from './src/tab';
import {NotificationsScreen} from './src/drawer';
import {RegistrationScreen, LoginScreen} from './src/auth';

import Icon from 'react-native-vector-icons/FontAwesome';

function TabNavigator() {
  console.log("CHECK");
  return(
    <Tab.Navigator barStyle={{backgroundColor: '#224077'}} screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Warriors') {
            iconName = focused ? 'user' : 'user';
          } else if (route.name === 'Events') {
            iconName = focused ? 'calendar' : 'calendar';
          } else if (route.name === 'MensGroup') {
            iconName = focused ? 'users' : 'users';
          }
          // else if (route.name === 'Resources') {
          //   iconName = focused ? 'file' : 'file';
          // }

          // You can return any component that you like here!
          return <Icon name={iconName} color="#dfdfe5" style={{width:20, height: 20, backgroundColor: 'transparent'}} resizeMode="contain" size={20}/>;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'white',
        style: {
          backgroundColor: 'white'
        },
      }}>
      <Tab.Screen name="Home" children={() => <HomeStack check={true} /> } />
      <Tab.Screen name="Warriors" component={WarriorStack} />
      <Tab.Screen name="Events" component={EventsStack} />
      <Tab.Screen name="MensGroup" component={MensStack} />
    </Tab.Navigator>
  )
}

const Tab = createMaterialBottomTabNavigator();

const navOptionHandler = () => ({
  headerShown: false
})

const StackHome = createStackNavigator();
const StackWarrior = createStackNavigator();
const StackEvent = createStackNavigator();
const StackGroups = createStackNavigator();
const StackResources = createStackNavigator();
function HomeStack() {
  return (
    <StackHome.Navigator>
      <StackHome.Screen name="Home" component={HomeScreen} options={navOptionHandler}/>
      <StackHome.Screen name="HomeDetail" component={HomeScreenDetail} options={navOptionHandler}/>

    </StackHome.Navigator>
  )
}
function WarriorStack() {
  return (
    <StackWarrior.Navigator>
      <StackWarrior.Screen name="Warrior" component={WarriorScreen} options={navOptionHandler}/>
      <StackWarrior.Screen name="WarriorScreenDetail" component={WarriorScreenDetail} options={navOptionHandler}/>

    </StackWarrior.Navigator>
  )
}
function EventsStack() {
  return (
    <StackEvent.Navigator>
      <StackEvent.Screen name="EventScreen" component={EventScreen} options={navOptionHandler}/>
      <StackEvent.Screen name="EventScreenDetail" component={EventScreenDetail} options={navOptionHandler}/>

    </StackEvent.Navigator>
  )
}


function MensStack() {
  return (
    <StackGroups.Navigator>
      <StackGroups.Screen name="MensScreen" component={MensScreen} options={navOptionHandler}/>
      <StackGroups.Screen name="MensScreenDetail" component={MensScreenDetail} options={navOptionHandler}/>

    </StackGroups.Navigator>
  )
}

const Drawer = createDrawerNavigator();
function DrawerNavigator({navigation}) {
   return(
     <Drawer.Navigator initialRouteName="Notifications" drawerPosition="right" drawerStyle={{width: 130, backgroundColor: '#e8e8e8'}} drawerContent={() => <CustomDrawerContent navigation={navigation} />}>
       <Drawer.Screen name="MenuTab" component={TabNavigator} />
       <Drawer.Screen name="NotificationsScreen" component={NotificationsScreen} />
       <Drawer.Screen name="Logout" component={LoginScreen} />
     </Drawer.Navigator>
   )
}
const StackApp = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StackApp.Navigator initalRouteName="Login">
        <StackApp.Screen name="Login" component={LoginScreen} options={navOptionHandler}/>
        <StackApp.Screen name="HomeApp" component={DrawerNavigator} options={navOptionHandler}/>
        <StackApp.Screen name="Register" component={RegistrationScreen} options={navOptionHandler}/>
      </StackApp.Navigator>
    </NavigationContainer>
  );
}
