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
          <View style={styles.eventImage}></View>
          <View style={styles.eventDetails}>
            <View> 
                <Text> the Clubhou.se</Text>
            </View>
            <View> 
                <Text> 03/15/18</Text>
            </View>
            <View> 
                <Text> 6-8pm</Text>
            </View>
          </View>

          <Button title='register' onPress={NavigationActions.Root} style={styles.eventRegister}> </Button>

          <View style={styles.eventDescription}></View>   

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

      </ScrollView>
    )
  }
}
