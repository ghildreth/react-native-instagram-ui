import React, { Component } from 'react';
import { Text, View, Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'native-base';
import AddMedia from './AddMedia';
import Profile from './Profile'
import Likes from './Likes';
import Home  from './Home';
import Search from './Search';



const TabNavigator = createBottomTabNavigator({
  Home: { screen: Home },
  Search: { screen: Search },
  AddMedia:  { screen: AddMedia },
  Likes:  { screen: Likes },
  Profile: { screen: Profile}
},{
  swipeEnabled: true,
  animationEnabled: true,
  tabBarOptions:{
    style:{
      ...Platform.select({
        android: {
          backgroundColor: 'white'
        }
      })
    },
  },
  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor: 'grey',
    showLabel: false,
    showIcon: true,
    
  }
})

class MainScreen extends Component {
  static navigationOptions = {
   header: null,
  }
  render(){
    return(
      <TabNavigator />
    )
  }
}

export default MainScreen;