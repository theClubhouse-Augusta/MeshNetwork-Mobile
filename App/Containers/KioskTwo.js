import React, { Component } from 'react';
import { ScrollView, Image, View, Text } from 'react-native';
import { Actions as NavigationActions } from 'react-native-router-flux'; 
import { Card, CardItem, Body, List, ListItem, Toast, H1, H2 } from 'native-base';

// Styles
import styles from './Styles/KioskStyles';

export default class KioskTwo extends React.Component {
  constructor(props) {
    super(props);3
  };

  render () {
    var items = ['strawberry', 'banana', 'durian' ]; 

    return (
      <ScrollView style={styles.container}>

      <H1 style={styles.reasonConfirm}> Thanks! </H1>


       <View style={styles.suggestedEvents}>

       <H2 style={styles.eventsTitle}> Suggested Events </H2>

        <List dataArray={items}
          renderRow={(item) => 
            <ListItem  style={styles.cardContainer} onPress={() => Toast.show({
              text: 'oh snap!', 
              position: 'bottom', 
              buttonText: 'OK', 
            })}>
              <Card>
                <CardItem>
                  <Body>
                    <Text>
                      {item}
                    </Text>
                  </Body>
                </CardItem>
              </Card>
            </ListItem>
          }> 
          </List>   

       </View>

      </ScrollView>
    )
  }
}