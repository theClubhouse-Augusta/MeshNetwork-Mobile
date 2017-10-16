import React, { Component } from 'react'
import { Scene, Router, Stack } from 'react-native-router-flux'

import Home from '../Containers/Home'

class NavigationRouter extends Component {
  render() {
    return(
      <Router>
        <Stack key="root">
          <Scene initial key='home' component={Home} title='Home' hideNavBar={true}/>
        </Stack>
      </Router>
    )
  }
}

export default NavigationRouter
