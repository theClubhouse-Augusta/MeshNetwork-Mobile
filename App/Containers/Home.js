// @flow

import React, { Component } from 'react';
import { ScrollView, Image, View, Text } from 'react-native';
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/HomeStyle';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  };

  componentWillMount() {
    this.getSkills();
  }

  getSkills = () => {
    fetch('http://192.168.0.12:8000/api/skills', {
      method:'GET',
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      console.warn(json);
    })
  }

  render () {

    return (
      <ScrollView style={styles.container}>
        <View style={styles.appBar}>
          <Text style={styles.titleStyle}> Home </Text>
        </View>

        <View style={styles.welcome}>
          <Text style={styles.welcomeText}>Welcome to the</Text>
          <Text style={styles.welcomeText}>React-Native Boilerplate!</Text>
          <Text>Created By: Technopathic</Text>
        </View>

      </ScrollView>
    )
  }
}
