// @flow

import React, { Component } from 'react';
import { ScrollView, Image, View, Text, Button, TextInput } from 'react-native';
import { Actions as NavigationActions } from 'react-native-router-flux'
import { H2, Content, Item, Input, Icon, Toast } from 'native-base'; 
import DateTimePickerTester from '../DateTimePicker'; 

import styles from './EventStyle';

export default class AddEvent extends React.Component {


  render () {

    return (
      <ScrollView>
        <H2> Create an event </H2>

        <Content>
          <Item success>
            <Input placeholder='Event name'/>
            <Icon name='checkmark-circle' />
          </Item>
        </Content>

        <View style={styles.addDateTimeWrap}> 
        <DateTimePickerTester />
        </View>

        <View style={styles.addTagPicker}>
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
        </View>

        <TextInput style={styles.addEventDes} multiline={true} > </TextInput>

        <Button title='Submit'  onPress={() => Toast.show({
              text: 'Got it!', 
              position: 'top',
              type: 'success',  
              buttonText: 'OK', 
            })}/> 

      </ScrollView>
    )
  }
}
