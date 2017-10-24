// @flow

import React, { Component } from 'react';
import { 
  ScrollView, 
  Image, 
  View, 
  Text,
  Dimensions,
  TouchableOpacity 
} from 'react-native';
import { Icon } from 'native-base';
import { Actions as NavigationActions } from 'react-native-router-flux'
import styles from './Style';

const width = Dimensions.get('window').width;
const viewPort = Dimensions.get('window').height - 60;

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      user: 
        {
          id: 1,
          name: 'John Doe', 
          email: 'dude@mail.com',
          space: 'clubhouse',
          avatar: require('../Images/dude.jpg'),
          location: 'Augusta, Georgia',
          company: 'Vandalay Indudries',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do'
          +'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad'
          +'minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip'
        },
        skills: [
        {
          id: 1,
          name: 'html',
        },
        {
          id: 2,
          name: 'css',
        },
        {
          id: 3,
          name: 'php',
         },
         {
          id: 4,
          name: 'javascript',
         },
         {
          id: 5,
          name: 'rest apis',
        },
        {
          id: 6,
          name: 'linux',
        },
     ],
    };
  };

  render () {

    const skills = this.state.skills.length !== 0 
      ? <SkillList skills={this.state.skills} />
      : null

    return (
      <ScrollView style={styles.container}>

        <View style={styles.zappBar}>
          <View style={styles.wtf}>
            <Icon style={{color: 'black'}} name='md-menu' />
          </View>
        </View>

        <View style={styles.appBar}>
          <View>
            <Image 
              style={styles.imageStyle}
              source={this.state.user.avatar} 
            />
          </View>

          <View style={{backgroundColor: 'white',}}>
            <Text style={styles.titleStyle}> 
              {this.state.user.name} 
            </Text>
            <Text style={styles.titleStyleTwo}> 
              {this.state.user.company} 
            </Text>
          </View>
        </View>

        <View style={{
            display: 'flex', 
            flexDirection: 'row',
            backgroundColor: 'white',
          }}
        >
          <View style={styles.one}><Icon name="ios-person" /></View>
          <View style={styles.one}><Icon name="calendar" /></View>
          <View style={styles.one}><Icon name="share" /></View>
        </View>              

        <View style={{
            backgroundColor: 'white',
            flexDirection: 'column', 
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#212121'
        }}>
          <Text 
            numberOfLines={1} 
            style={{
              flex: 1, 
              fontSize: 16,
              fontWeight: 'bold',
              fontFamily:'Montserrat',
              alignSelf: 'flex-start',
              textAlign: 'left',
              marginLeft: width * .05,
              marginTop: viewPort * .02,
              marginBottom: viewPort * .01,
            }}
          >
          About {this.state.user.name.split(" ")[0]}
          </Text>

          <Text 
            style={{
              fontFamily: 'sans-serif',
              fontSize: 14,
              textAlign: 'left',
              // textAlign: 'center',
              // textAlignVertical: 'center',
              width: width * .90,
              marginBottom: viewPort * .03
            }}
          >
          {this.state.user.description}
        </Text>

      </View>

        <View style={{
            backgroundColor: 'white',
            flexDirection: 'column', 
            alignItems: 'center',
            // borderBottomWidth: 1,
            // borderBottomColor: '#212121'
        }}>
          
          <Text 
            numberOfLines={1} 
            style={{
              flex: 1, 
              fontSize: 16,
              fontWeight: 'bold',
              fontFamily:'Montserrat',
              alignSelf: 'flex-start',
              textAlign: 'center',
              width: width,
              marginTop: viewPort * .02,
              marginBottom: viewPort * .01,
            }}
          >
            Skills
          </Text>
          {skills}
        </View>
        
      </ScrollView>
    )
  }
}
export default Profile;

const  SkillList = (props) => {
  // styles  
  const skillListContainer = {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row', 
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 30,
    width: width,
  };

  // Skill array
  const SkillTags = props.skills.map(skill =>
    <SkillTag 
      key={`tag${skill.id}`} 
      skill={skill.name} 
    />
);

  return (
    <View style={skillListContainer}>
      {SkillTags}
    </View>

  );
}

// single skill tag
function SkillTag(props) {

  const skillTagContainer = {
    // formatting
    marginBottom: 10,
    width: 100,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 10,
    // background
    backgroundColor: 'white',
    // border
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000000',
    borderRadius: 10,
  };

  const skillTagText = {
    textAlign: 'center',
    color: '#000000',
  };

  return (
    <TouchableOpacity 
      style={skillTagContainer}
    >
      <Text style={skillTagText}>
        {props.skill}
      </Text>
    </TouchableOpacity>
  );
}
