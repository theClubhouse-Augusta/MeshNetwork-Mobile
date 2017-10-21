import React, { Component } from 'react'
import { Scene, Router, Stack } from 'react-native-router-flux'
import KioskOne from '../Containers/KioskOne'; 
import KioskTwo from '../Containers/KioskTwo'; 
import EventDetail from '../Containers/EventDetail';


import Root from '../Containers/Root'

class NavigationRouter extends Component {
  render() {
    return(
      <Router>
        <Stack key="root">      
          <Scene key='kioskOne' component={KioskOne} title='kioskOne' hideNavBar={true}/>
          <Scene key='kioskTwo' component={KioskTwo} title='kioskTwo' hideNavBar={true}/>  
          <Scene key='eventDetail' component={EventDetail} title='eventDetail' hideNavBar={true}/>        
          <Scene initial key='root' component={Root} title='Root' hideNavBar={true}/>
        </Stack>
      </Router>
    )
  }
}

export default NavigationRouter
