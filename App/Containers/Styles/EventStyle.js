import { StyleSheet, Dimensions } from 'react-native';

const viewPort = Dimensions.get('window').height - 30;
const width = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    minHeight:viewPort,
  },

  eventImage: {
    height: 200, 
    backgroundColor: '#BBBBBB',
  }, 

  eventDetails: {
    height: 80, 
    backgroundColor: '#ffffff', 
    marginBottom: 30, 
  }, 

  eventRegister: {

  }, 

  eventDescription: {
    marginTop: 30, 
    height: 150, 
    backgroundColor: '#CCCCCC', 
  }, 

  eventTagRow: { 
    marginTop: 30, 
    marginLeft: 5, 
    marginRight: 5, 
    display: 'flex', 
    flexDirection: 'row',   
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  }, 

  eventTag: { 
    borderRadius: 10, 
    padding: 10, 
    borderWidth: 1, 
    borderColor: '#000', 
  }, 
}) 