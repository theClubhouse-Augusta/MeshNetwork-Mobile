// @flow
import { StyleSheet, Dimensions } from 'react-native';

const viewPort = Dimensions.get('window').height - 30;
const width = Dimensions.get('window').width;

export default StyleSheet.create({

 /*
  * <Search />
  */     
  SearchImage: {
    resizeMode: 'contain',
    width: width,
  },

  // search
  SearchStyle: {
    marginTop: 3, 
    borderTopWidth:1, 
    borderColor: '#fff', 
    backgroundColor: 'white',
  },


 /*
  * <SpaceSearchResult />
  */     
  resultsListHeaderText: { 
    color: '#000000',
    fontWeight: 'bold',
  },

  resultsListContainer: { 
    display: 'flex',
  },
  
  resultCard: {
    // formatting
    display: 'flex', 
    flexDirection: 'row',
    alignItems: 'center',
    width: width, 
    // border
    borderWidth: .7, 
    borderStyle: 'solid', 
    borderColor: '#EEEEEE', 
  },

  resultImage: {
    // formatting
    marginTop: viewPort * .005,
    width: 50, 
    height: 50, 
    // border
    borderRadius: 50, 
    borderWidth: .1, 
    borderColor: 'black' 
  },

  resultNameWidth: {
    flexBasis: width/2.5, 
  },

  resultCompanyWidth: {
    flexBasis: width/4, 
  },
});
