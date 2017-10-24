// @flow

import React, { Component } from 'react';
import { ScrollView, Image, View, Text, Button } from 'react-native';
import { Actions as NavigationActions } from 'react-native-router-flux'
import { Content, Toast, Left, H3 } from 'native-base'

import styles from './Styles/EventStyle';

export default class EventDetail extends React.Component {


  render () {

    return (
      <ScrollView>
          <Image style={styles.eventImage} source={require('./Images/placeholder.jpg')}>
            <View> 
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
          <Button title='register' onPress={() => Toast.show({
              text: 'Got it!', 
              position: 'top',
              type: 'success',  
              buttonText: 'OK', 
            })}  accessibilityLabel="Register for event"> </Button>
          </View>       

          


          <View style={styles.eventOrganizers}> 
            <Text style={styles.organizerHeader}>  Organizers </Text>
            <View style={styles.userCard}>             
                <Image style={styles.userAvatar} source={require('./Images/coolCat.jpg')}/>             
            </View>

          </View>


          <View style={styles.eventAttendees}> 
          <Text style={styles.attendeesHeader}>  Attending </Text>
            <View style={styles.userCard}>             
                <Image style={styles.userAvatar} source={require('./Images/smilely.jpg')}/>             
            </View>
          </View>

          
          <View style={styles.eventMap}> 
            <Text style={styles.eventSpace}>
            the Clubhou.se </Text>
            <Text style={styles.eventAddress}> 
              540 Telfair St., Augusta, GA 30901
            </Text>
            <Image source={require('./Images/map.png')} />
          </View>

       </ScrollView>
    )
  }
}
