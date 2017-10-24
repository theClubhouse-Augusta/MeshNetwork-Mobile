import React, { Component } from 'react'
import { Scene, Router, Stack } from 'react-native-router-flux'
import KioskOne from '../Containers/KioskOne'; 
import KioskTwo from '../Containers/KioskTwo'; 
import EventDetail from '../Containers/EventDetail';
import AddEvent from '../Containers/AddEvent';
import SearchUsers from '../Containers/SearchUsers'; 
import Search from '../Containers/Search'; 


import Root from '../Containers/Root'

class NavigationRouter extends Component {
  render() {
    return(
      <Router>
        <Stack key="root">      
          <Scene key='kioskOne' component={KioskOne} title='kioskOne' hideNavBar={true}/>
          <Scene key='kioskTwo' component={KioskTwo} title='kioskTwo' hideNavBar={true}/>  
          <Scene key='eventDetail' component={EventDetail} title='eventDetail' hideNavBar={true}/>
          <Scene key='addEvent' component={AddEvent} title='addEvent' hideNavBar={true}/> 

          <Scene key='search' component={Search} title='search' hideNavBar={true}/> 

          <Scene key='searchUsers' component={SearchUsers} title='searchUsers' hideNavBar={true}/> 

          <Scene initial key='root' component={Root} title='Root' hideNavBar={true}/>
        </Stack>
      </Router>
    )
  }
}

export default NavigationRouter
