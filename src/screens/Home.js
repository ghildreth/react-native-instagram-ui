import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { Icon, Header, Left, Right, Body, Container, Content, Card, CardItem, Thumbnail } from 'native-base';
const imageUrl = 'https://i.pinimg.com/originals/27/2a/97/272a976264a0d0ce19220b2fc8883315.jpg';
 const UserData = [
   {name: "Cat1", image: imageUrl},
   {name: "Cat2", image: imageUrl},
   {name: "Cat3", image: imageUrl},
   {name: "Cat4", image: imageUrl},
   {name: "Cat5", image: imageUrl},
   {name: "Cat6", image: imageUrl},
   {name: "Cat7", image: imageUrl},
 ]
export default class Home extends Component {
    static navigationOptions = {
        tabBarIcon:({ tintColor }) => <Icon name="ios-home-outline" style={{color: tintColor }}/>
    }
        renderItem = ({item}) => {
            return(
                <View style={{width: 60, justifyContent:'center', alginItems: 'center', marginRight: 10}}>
                    <Thumbnail source={{uri: item.image}} style={{borderWidth: 3, borderColor: 'pink'}}/>
                    <Text style={{marginTop: 5, fontSize: 16}}>{item.name}</Text>
                </View>
            )
        }
        render(){
        return(
            <Container>
            <Header >
                <Left><Icon name="ios-camera-outline" style={{ paddingLeft: 10 }} /></Left>
                <Body><Text>Instagram</Text></Body>
                <Right><Icon name="ios-camera-outline" style={{ paddingRight: 10 }} /></Right>
            </Header>
          <Content style={{backgroundColor: 'white'}}>
              <View style={styles.avatarContainer}>
                  <View style={styles.avatarText}>
                      <View>
                          <Text>Stroies</Text>
                      </View>
                      <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Icon name={'md-play'} style={{marginRight: 5, fontSize: 16}}/>
                          <Text>Watch All</Text>
                      </View>
                  </View>
                  <View style={styles.avatarScroller}>
                    <FlatList
                    data={UserData}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={this.renderItem}
                    />
                  </View>
              </View>
           </Content>   
        </Container>
      )
    }
}


const styles = StyleSheet.create({
    avatarContainer: {
        flex: 1,
        flexDirection: 'column',
        height: 120,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        paddingHorizontal: 15,
        paddingBottom: 5,
    },
    avatarScroller: {
        flex:3,
    },
    avatarTextContainer: {
        paddingTop: 5,
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    iconContainer: {
        flexDirection: 'row',
    }
})