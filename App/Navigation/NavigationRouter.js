import React, { Component } from 'react'
import { Scene, Router, Stack } from 'react-native-router-flux'
import KioskOne from '../Containers/KioskOne'; 
import KioskTwo from '../Containers/KioskTwo'; 
<<<<<<< HEAD
import SearchUsers from '../Containers/SearchUsers';
import Search from '../Containers/Search';
import Profile from '../Containers/Profile';
import Root from '../Containers/Root';
=======
import EventDetail from '../Containers/EventDetail';


import Root from '../Containers/Root'
>>>>>>> 350673ec221c55e19d105d0ec82df614bdc33f5b

class NavigationRouter extends Component {
  render() {
    return (
      <Router>
        <Stack key="root">      
<<<<<<< HEAD
          <Scene initial key='root' component={Root} title='Root' hideNavBar={true} />
          <Scene key='kioskOne' component={KioskOne} title='kioskOne' hideNavBar={true} />
          <Scene key='kioskTwo' component={KioskTwo} title='kioskTwo' hideNavBar={true} />         
          <Scene key='searchusers' component={SearchUsers} title='searchusers' hideNavBar={true} />
          <Scene key='search' component={Search} title='search' hideNavBar={true} />
          <Scene key='profile' component={Profile} title='profile' hideNavBar={true} />
=======
          <Scene key='kioskOne' component={KioskOne} title='kioskOne' hideNavBar={true}/>
          <Scene key='kioskTwo' component={KioskTwo} title='kioskTwo' hideNavBar={true}/>  
          <Scene key='eventDetail' component={EventDetail} title='eventDetail' hideNavBar={true}/>        
          <Scene initial key='root' component={Root} title='Root' hideNavBar={true}/>
>>>>>>> 350673ec221c55e19d105d0ec82df614bdc33f5b
        </Stack>
      </Router>
    );
  }
}
export default NavigationRouter;
