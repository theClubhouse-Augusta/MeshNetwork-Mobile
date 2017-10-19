// @flow

import { StyleSheet, Dimensions } from 'react-native';

const viewPort = Dimensions.get('window').height - 30;

export default StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    minHeight:viewPort,
  },

  appBar: {
    backgroundColor:"#263238",
    justifyContent:'center',
    alignItems:'center',
    height:55,
    borderBottomWidth:1,
    borderBottomColor:'#ffbe39'
  },

  titleStyle: {
    textAlign:"center",
    fontSize:28,
    color:"#EEEEEE",
    fontFamily:'Lobster-Regular'
  },

  welcome: {
    flex:2,
    minHeight:Dimensions.get('window').height / 2,
    flexDirection:'column',
    alignItems:'center',
    justifyContent: 'space-around', 
  },

  welcomeText: {
    fontSize:32,
    fontFamily:'Lato-Regular',
    textAlign:'center',
  },

  authorText: {
    marginTop:15
  }


})
