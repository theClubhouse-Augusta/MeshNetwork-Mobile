import React, { Component } from 'react'
import { Scene, Router, Stack } from 'react-native-router-flux'
import KioskOne from '../Containers/Kiosk/KioskOne'; 
import KioskTwo from '../Containers/Kiosk/KioskTwo'; 

import Events from '../Containers/Events'; 
import EventDetail from '../Containers/Events/EventDetail'; 
import AddEvent from '../Containers/Events/AddEvent'; 


import UserSearch from '../Containers/UserSearch';
import UserProfile from '../Containers/UserProfile';

import Root from '../Containers/Root';


class NavigationRouter extends Component {
  render() {
    return (
      <Router>
        <Stack key="root">      
          <Scene initial key='root' component={Root} title='Root' hideNavBar={true} />

          <Scene key='kioskOne' component={KioskOne} title='kioskOne' hideNavBar={true} />
          <Scene key='kioskTwo' component={KioskTwo} title='kioskTwo' hideNavBar={true} />         

          <Scene key='addEvent' component={AddEvent} title='addEvent' hideNavBar={true} />
          <Scene key='eventDetail' component={EventDetail} title='eventDetail' hideNavBar={true} />         
          <Scene key='userSearch' component={UserSearch} title='userSearch' hideNavBar={true} />
          <Scene key='userProfile' component={UserProfile} title='userProfile' hideNavBar={true} />
        </Stack>
      </Router>
    );
  }
}
export default NavigationRouter;
