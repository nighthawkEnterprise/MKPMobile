import * as React from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {CustomHeader, CustomDrawerContent} from './src';
import {HomeScreen, HomeScreenDetail, EventScreen, EventScreenDetail, MensScreen, MensScreenDetail, WarriorScreen, WarriorScreenDetail } from './src/tab';
import {NotificationsScreen} from './src/drawer';
import {RegistrationScreen, LoginScreen} from './src/auth';
import Icon from 'react-native-vector-icons/FontAwesome';




function TabNavigator() {
  return(
    <Tab.Navigator barStyle={{backgroundColor: '#224077'}} screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? require('./src/images/home-white.png') : require('./src/images/home-black.png');
          } else if (route.name === 'Warriors') {
            iconName = focused ? require('./src/images/brother-white.png') : require('./src/images/brother-black.png');
          } else if (route.name === 'Events') {
            iconName = focused ? require('./src/images/event-white.png') : require('./src/images/event-black.png');
          } else if (route.name === 'MensGroup') {
            iconName = focused ? require('./src/images/group-white.png') : require('./src/images/group-black.png');
          }

          // You can return any component that you like here!
          return <Image source={iconName} style={{width:20, height: 20}} resizeMode="contain" />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'white',
        style: {
          backgroundColor: 'lightBlue'
        },
      }}>
      <Tab.Screen name="Home" component={HomeStack} />
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
     <Drawer.Navigator initialRouteName="Notifications" drawerPosition="right" drawerStyle={{width: 200}} drawerContent={() => <CustomDrawerContent navigation={navigation} />}>
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
