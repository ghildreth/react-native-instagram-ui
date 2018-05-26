import React, { Component } from 'react'
import { Text, View } from 'react-native';
import { Icon } from 'native-base';

export default class Search extends Component {
    static navigationOptions = {
        tabBarIcon:({ tintColor }) => <Icon name="ios-search-outline" style={{color: tintColor }}/>
    }
  render() {
    return (
        <View style={{flex: 1,  justifyContent: 'center', alignItems: "center"}}>
            <Text> Search </Text>
        </View>
    )
  }
}
