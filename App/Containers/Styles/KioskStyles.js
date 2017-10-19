import { StyleSheet, Dimensions } from 'react-native';

const viewPort = Dimensions.get('window').height - 30;

export default StyleSheet.create({
        
    container: {
        flex:1,
        flexDirection:'column',
        minHeight:viewPort,
      },  

        reasonConfirm: {
            margin: 30, 
            marginBottom: 40, 
            alignContent: 'center', 
            textAlign: 'center',
        },
      
        eventsTitle: {
            alignContent: 'center', 
            textAlign: 'center',
            margin: 25,
        },
        



suggestedEvents: {
}, 

exitKiosk: {
    marginBottom: 0,
    marginTop: 25,     
},        

kioskTwoInstruct: {
    color: '#EEEEEE',
    backgroundColor: '#263238',
    padding: 20,
    height: 100,
    marginBottom: 5,
    fontSize: 20,
    textAlign: 'center', 
},
    
    welcomeMsg: { 
        borderColor: 'red', 
        borderWidth: 1, 
        marginBottom: 10,
        marginLeft: 10, 
        marginRight: 10, 
        height: 150, 
    },

    reasonSelect: { 
        margin: 10,
        height: 400,     
       
    },

    contentCard: { 
        borderRadius: 2,
        borderColor: "#DDDDDD",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 1.5,
        elevation: 3, 
        flex: 1,  
        margin: 25,
        height: 75,
    }, 
        

        cardTitle: {
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',  
        }, 

        cardBody: { 
            justifyContent: 'center',
            alignItems: 'center',
            
        }, 
    
            

        



    




}) 