import React, { Component } from 'react';
import NavigationRouter from './Navigation/NavigationRouter'
import { Root } from "native-base";

import OneSignal from 'react-native-onesignal';

class App extends Component {

  componentDidMount() {
    OneSignal.configure({});
  }

  render() {
    return(
      <Root>
        <NavigationRouter/>
      </Root>
    )
  }

}
export default App
