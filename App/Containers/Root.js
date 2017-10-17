// @flow

import React, { Component } from 'react'
import { View, StatusBar, Text, AsyncStorage } from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import { Actions as NavigationActions } from 'react-native-router-flux'

import Home from './Home'
import Profile from './Profile'
import Search from './Search'
import Events from './Events'
import Spaces from './Spaces'

class Root extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex:0,
      user:""
    };
  };

  async componentWillMount() {

    await AsyncStorage.getItem("user")
    .then((value) => {
      value = JSON.parse(value);
      this.setState({user: value});
    })

    if(this.props.index)
    {
      this.setState({
        selectedIndex:this.props.index
      })
    }
  };


  setNavigation = (id) => {
    this.setState({selectedIndex: id});
  }

  renderScene() {
    if(this.state.selectedIndex === 0)
    {
      return(
        <Home/>
      )
    }
    else if(this.state.selectedIndex === 1)
    {
      return(
        <Profile uid={this.state.user.user.id}/>
      )
    }
    else if(this.state.selectedIndex === 2)
    {
      return(
        <Search/>
      )
    }
    else if(this.state.selectedIndex === 3)
    {
      return(
        <Spaces/>
      )
    }
    else if(this.state.selectedIndex === 4)
    {
      return(
        <Events/>
      )
    }
  };

  renderNavigation() {

    const footer = {
      backgroundColor:"#FFFFFF",
      borderTopWidth:1,
      borderTopColor:'#DDDDDD'
    };

    var homeIcon = <Icon name='md-home' style={{color:"#999999"}} />;
    var searchIcon = <Icon name='md-search' style={{color:"#999999"}} />;
    var addIcon = <Icon name='md-add-circle' style={{color:"#999999"}} />;
    var starIcon = <Icon name='md-star' style={{color:"#999999"}} />;
    var personIcon = <Icon name='md-person' style={{color:"#999999"}} />;

    if(this.state.selectedIndex === 0) { homeIcon = <Icon name='md-home' style={{color:"#333333"}} />;}
    else if(this.state.selectedIndex === 1) { searchIcon = <Icon name='md-search' style={{color:"#333333"}} />; }
    else if(this.state.selectedIndex === 2) { addIcon = <Icon name='md-add-circle' style={{color:"#333333"}} />; }
    else if(this.state.selectedIndex === 3) { starIcon = <Icon name='md-star' style={{color:"#333333"}} />; }
    else if(this.state.selectedIndex === 4) { personIcon = <Icon name='md-person' style={{color:"#333333"}} />; }

    return (
      <FooterTab style={footer}>
        <Button onPress={() => this.setNavigation(0)}>
            {homeIcon}
        </Button>
        <Button onPress={() => this.setNavigation(1)}>
            {searchIcon}
        </Button>
        <Button onPress={() => this.setNavigation(2)}>
            {addIcon}
        </Button>
        <Button onPress={() => this.setNavigation(3)}>
            {starIcon}
        </Button>
        <Button onPress={() => this.setNavigation(4)}>
            {personIcon}
        </Button>
      </FooterTab>
    );
  };

  render () {
    const footerStyle = {
      height:40
    };

    return (
      <Container>
        <StatusBar backgroundColor="#ffbe39" barStyle="dark-content" />
        {this.renderScene()}
        <Footer style={footerStyle}>
          {this.renderNavigation()}
        </Footer>
      </Container>
    )
  }
}

export default Root
