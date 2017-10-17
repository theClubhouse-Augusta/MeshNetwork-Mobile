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
            margin: 15, 
            alignContent: 'center', 
            textAlign: 'center',
        },
        
        suggestedEvents: {
            marginBottom: 20, 
        }, 

            cardContainer: {
            margin: 15,
            backgroundColor: 'transparent', 
            },
    
    searchBody: { 
        borderColor: 'green', 
        borderWidth: 1,  margin: 10, 
            },
    reasonSelect: { 
        borderColor: 'blue', 
        borderWidth: 1, margin: 10,
    },
    
    topHalf: { 
        borderColor: 'red', 
        borderWidth: 1, margin: 10,
    },

    
            

        



    




}) 