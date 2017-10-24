// @flow

import React, { Component } from 'react';
import { ScrollView, Image, View, Text, Button } from 'react-native';
import { Actions as NavigationActions } from 'react-native-router-flux'
import {Content} from 'native-base'

import styles from './Styles/EventStyle';

export default class EventDetail extends React.Component {


  render () {

    return (
      <ScrollView>
          <Image style={styles.eventImage} source={require('./Images/placeholder.jpg')}>
            <View > 
            <Text style={styles.eventName}>PyNight</Text>
            </View>
          </Image>
          <View style={styles.eventDetails}>
            <View> 
                <Text style={styles.detailText}> the Clubhou.se</Text>
            </View>
            <View> 
                <Text style={styles.detailText}> 03/15/18</Text>
            </View>
            <View> 
                <Text style={styles.detailText}> 6-8pm</Text>
            </View>
          </View>          

          <View style={styles.eventTagRow}> 
            <View>
              <Text style={styles.eventTag}> Programming </Text>
            </View>
            <View>
              <Text style={styles.eventTag}> Python </Text>
            </View>
            <View>
              <Text style={styles.eventTag}> Development </Text>
            </View>
          </View>

    
          <Text style={styles.eventDescription}>Cat ipsum dolor sit amet, cat fur is the new black for kitty kitty wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again. </Text>  

          <View style={styles.eventRegister}> 
          <Button title='register' onPress={NavigationActions.Root}  accessibilityLabel="Register for event"> </Button>
          </View>

      </ScrollView>
    )
  }
}
