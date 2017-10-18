import React, { Component } from 'react';
import { ScrollView, Image, View, Text } from 'react-native';
import { Actions as NavigationActions } from 'react-native-router-flux'; 
import { Header, Item, Input, Icon, Button, Card, CardItem, Body, List, ListItem, H2, H3 } from 'native-base';

// Styles
import styles from './Styles/KioskStyles';

export default class KioskOne extends React.Component {
  constructor(props) {
    super(props);
  };

  render () {

    var reasons = ['Work', 'Event', 'Tour'];

    return (
      <ScrollView style={styles.container}>

        <View style={styles.checkInSearch}> 
        <Header searchBar underline>
          <Item>            
            <Input placeholder="Search" />
            <Icon name="ios-search" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
      </View>   

        <ScrollView style={styles.topHalf}> 
          <View style={styles.searchResults}> 
            { /* autocomplete area */ }
          </View>

          <View style={styles.welcomeMsg}> 
            <H2> A Welcome</H2>
          </View>
        </ScrollView>

        

        <View style={styles.reasonSelect}>         
          <List style={styles.cardContainer}  dataArray={reasons}
          renderRow={(reason) => 
            <ListItem style={styles.contentCard} > 
                <View > 
                  
                  <Body style={styles.cardBody}>
                    
                    <Text>
                    
                    <H3 style={styles.cardTitle}> {reason} </H3>
                    </Text>
                  </Body>
                </View> 
            </ListItem>
          }> 
          </List>          
        </View>
      </ScrollView>
    )
  }
}