import { StyleSheet, Dimensions } from 'react-native';

const viewPort = Dimensions.get('window').height - 30;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height - 60; 

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
    alignContent: 'center', 
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
    marginBottom: 10 
  }, 

  eventRegister: { 
    width: width - 40, 
    alignSelf: 'center', 
    marginTop: 10, 
  }, 

  addTagPicker: { 
    height: 150, 
    borderColor: 'blue', 
    borderWidth: 1, 
    marginTop: 20,
    marginBottom: 20, 
    marginRight: 5, 
    marginLeft: 5,  
  }, 

  addEventDes: {
    height: 200, 
    borderColor: 'black', 
    borderWidth: 1, 
    marginBottom: 20, 
    marginLeft: 5, 
    marginRight: 5, 
  }, 

  addDateTimeWrap: {
    height: 50, 
    margin: 20, 
 
  }, 

  addDateTimeButton: { 
   borderColor: 'green', 
   borderWidth: 1, 
  }, 

  eventOrganizers: { 
    marginTop: 50, 
    marginBottom: 20, 
    marginLeft: 5, 
    marginRight: 5, 
    borderBottomColor: 'black', 
    borderBottomWidth: 1,
  }, 

  eventAttendees: {  
    marginLeft: 5, 
    marginRight: 5,
  }, 

  attendeesHeader: { 
    fontSize: 16, 
    fontWeight: 'bold', 
  }, 

  organizerHeader: { 
    fontSize: 16, 
    fontWeight: 'bold', 
  }, 

  userAvatar: {
    height: 50, 
    width: 50, 
    borderRadius: 50,
    margin: 20,
  }, 

  eventSpace: {
    backgroundColor: "#263238",
    color: "#ffffff", 
    padding: 5, 
    paddingTop: 15, 
    fontSize: 18,
  }, 

  eventAddress: {
    backgroundColor: "#263238",
    color: "#ffffff", 
    padding: 5,
    paddingBottom: 15, 
  }, 

  eventMap: {
    width: width, 
    marginTop: 50, 
  }, 

}) 