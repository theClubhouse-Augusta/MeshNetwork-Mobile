import React, { Component } from 'react';
import { View } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';

import Home from '../Containers/Home';


class NavigationRouter extends Component {
  render() {
    return(
      <NativeRouter>
        <View>
          <Route initial path='/' component={Home} />
        </View>
      </NativeRouter>
    )
  }
}

export default NavigationRouter
