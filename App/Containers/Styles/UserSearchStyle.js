import { StyleSheet, Dimensions } from 'react-native';

const viewPort = Dimensions.get('window').height - 30;
const width = Dimensions.get('window').width;

export default StyleSheet.create({

    /*
     * <SearchUsers /> 
     */ 
    SearchBody: {
      flex: 1,
    },

    searchHeader: {
      // formatting
      marginBottom: 10,
      height: viewPort * .07,
      //background
      backgroundColor: '#fff', 
    },

    searchTextInput: {
      width: (width * .85), 
    },

    searchContent: {
      height: viewPort * .85,
      backgroundColor: '#fff',
    },

    searchHeaderTwo: {
      // formatting
      marginLeft: width * .05,
      alignSelf: 'flex-start',
      marginBottom: 10,
      // font styling
      color: '#000000',
      fontSize:28,
      fontFamily:'Lato-Regular',
    },


    /*
     * <SkillList /> 
     */ 
  skillListContainer:  {
    display: 'flex',
    flexDirection: 'row', 
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
    width: width,
  },


    /*
     * <SkillTag /> 
     */ 
  skillTagContainer: {
    // formatting
    marginBottom: 10,
    width: 100,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 10,
    // background
    backgroundColor: '#EEE',
    // border
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000000',
    borderRadius: 10,
  },

  skillTagText: {
    textAlign: 'center',
    color: '#000000',
  },


  /*
   * <Result /> 
   */ 
  resultsListHeaderText: { 
    color: '#000000',
    fontWeight: 'bold',
  },

  resultsListContainer: { 
    display: 'flex',
  },


  /*
   * <Result /> 
   */ 
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
    width: 50, 
    height: 50, 
    // border
    borderRadius: 50, 
    borderWidth: .1, 
    borderColor: 'black' 
  },

  resultTextContainer: {
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center'
  },

  resultNameWidth: {
    flexBasis: width/2.5, 
  },

  resultCompanyWidth: {
    flexBasis: width/4, 
  },

  /**
   * <PreSearch />
   */

  preSearchContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },


  preSearchContentContainer: {
    display: 'flex',
    alignItems: 'center',
  },


  preSearchContent: {
    // formatting
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 20,
    width: width * .8,
    // border
    borderBottomWidth: 2.2,
    // text
    color: '#000',
    fontSize:22,
    fontFamily:'Lato-Regular',
  },


  preSearchImageContainer: {
    display: 'flex',
    flex: 1,
  },


  preSearchImage: {
    borderRadius: 5,
    width: width * .9
  },
})