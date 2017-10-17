import React, { Component } from 'react'
import { Scene, Router, Stack } from 'react-native-router-flux'

import Root from '../Containers/Root'

class NavigationRouter extends Component {
  render() {
    return(
      <Router>
        <Stack key="root">
          <Scene initial key='root' component={Root} title='Root' hideNavBar={true}/>
        </Stack>
      </Router>
    )
  }
}

export default NavigationRouter
