import React, { Component } from 'react'
import { Scene, Router, Stack } from 'react-native-router-flux'
import KioskOne from '../Containers/KioskOne'; 
import KioskTwo from '../Containers/KioskTwo'; 


import Root from '../Containers/Root'

class NavigationRouter extends Component {
  render() {
    return(
      <Router>
        <Stack key="root">
          <Scene initial key='home' component={Home} title='Home' hideNavBar={true}/>
          <Scene key='kioskOne' component={KioskOne} title='kioskOne' hideNavBar={true}/>
          <Scene key='kioskTwo' component={KioskTwo} title='kioskTwo' hideNavBar={true}/>         
          <Scene key='root' component={Root} title='Root' hideNavBar={true}/>
        </Stack>
      </Router>
    )
  }
}

export default NavigationRouter
