// @flow

import React, { Component } from 'react';
import { ScrollView, Image, View, Text } from 'react-native';

// Styles
import styles from './Styles/HomeStyle';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  };

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
