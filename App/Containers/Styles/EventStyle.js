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
    width: width,  
    backgroundColor: '#BBBBBB',
     
    
  }, 

  eventName: { 
    fontSize: 32,
    color: '#ffffff',
    marginTop: 120, 
    marginLeft: 10,  
  }, 

  eventDetails: {
    height: 60, 
    backgroundColor: '#ffffff', 
    marginBottom: 30,
    paddingRight: 10,
    paddingLeft: 5,
    paddingTop: 20, 
    display: 'flex', 
    flexDirection: 'row',   
    justifyContent: 'space-between', 

  }, 

  detailText: {
    fontSize: 18, 
  }, 

  eventDescription: {
    marginTop: 30, 
    height: 150, 
    padding: 20, 
    backgroundColor: '#CCCCCC', 
  }, 

  eventTagRow: {
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
    backgroundColor: '#ffbe39', 
  }, 

  eventRegister: { 
    width: width - 40, 
    alignSelf: 'center', 
    marginTop: 10, 
  }, 
}) 