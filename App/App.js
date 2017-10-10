import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import NavigationRouter from './Navigation/NavigationRouter'

import OneSignal from 'react-native-onesignal';

class App extends Component {

  componentDidMount() {
    OneSignal.configure({});
  }

  render() {
    return(
      <View>
        <StatusBar backgroundColor="#ffbe39" barStyle="dark-content" />
        <NavigationRouter/>
      </View>
    )
  }

}
export default App
