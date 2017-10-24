// @flow

import { StyleSheet, Dimensions } from 'react-native';

const viewPort = Dimensions.get('window').height - 60;
const width = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    minHeight:viewPort,
  },

  zappBar: {
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor:"#263238",
    backgroundColor:"#212121",
    justifyContent:'flex-start',
    alignItems:'center',
    height: viewPort * .10,
    borderBottomWidth:1,
    borderBottomColor:'#212121',
    backgroundColor:"white",
  },

  wtf: {
    // width: width,
    paddingLeft: width * .03,
  },

  appBar: {
    display: 'flex',
    backgroundColor:"white",
    justifyContent:'center',
    alignItems:'center',
    height: viewPort * .30,
    borderBottomWidth:1,
    borderBottomColor:'#212121'
  },

  imageStyle: {
    borderRadius: width,
  },

  one: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
    height: viewPort * .10,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#212121',
    width: width * .3333,    
  },

  titleStyle: {
    textAlign:"center",
    fontSize:28,
    color:"#212121",
    fontFamily:'Montserrat'
  },

  titleStyleTwo: {
    textAlign:"center",
    fontSize:12,
    color:"#212121",
    fontFamily:'Montserrat'
  },

  titleStyleThree: {
    textAlign:"justify",
    width: width * .90,
    fontSize: 18,
    color:"#212121",
    fontFamily:'Montserrat',
    paddingTop: 10, 

  },
});
