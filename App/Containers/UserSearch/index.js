import React, { Component } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  Dimensions,
  TextInput 
} from "react-native";

import { Item, Icon, Button, Input } from 'native-base';
// components
import PreSearch from './PreSearch';
import SkillList from './Skill';
import ResultsList from './Results';
// styles
import styles from './Style';

const viewPort = Dimensions.get('window').height - 60;
const width = Dimensions.get('window').width;

class UserSearch extends Component {
  constructor() {
    super();
    this.state = {
      tagQuery: '',
      inutQuery: '',
      // results: [],
      // skills: [],
      results: [
        {
          id: 1,
          name: 'dude', 
          email: 'dude@mail.com',
          avatar: require('../Images/dude.jpg'),
          business: 'vandalay industries'
        },
        {
          id: 2,
          name: 'dudette', 
          email: 'dudette@mail.com',
          avatar: require('../Images/dude2.jpg'),
          company: 'vandalay industries'
        },
        {
          id: 3,
          name: 'sue', 
          email: 'sue@mail.com',
          avatar: require('../Images/dude3.jpg'),
          company: 'vandalay industries'
        },
        {
          id: 4,
          name: 'four', 
          email: 'four@mail.com',
          avatar: require('../Images/dude.jpg'),
          company: 'vandalay industries'
        },
        {
          id: 5,
          name: 'five', 
          email: 'five@mail.com',
          avatar: require('../Images/dude5.jpg'),
          company: 'vandalay industries'
        },
        {
          id: 6,
          name: 'six', 
          email: 'six@mail.com',
          avatar: require('../Images/dude6.jpg'),
          company: 'vandalay industries'
        },
        {
          id: 7,
          name: 'seven', 
          email: 'seven@mail.com',
          avatar: require('../Images/seven.jpg'),
          company: 'vandalay industries'
        },
        {
          id: 8,
          name: 'eight', 
          email: 'eight@mail.com',
          avatar: require('../Images/seven.jpg'),
          company: require('../Images/eight.jpg'),
        },
        {
          id: 9,
          name: 'nine', 
          email: 'nine@mail.com',
          avatar: require('../Images/seven.jpg'),
          company: require('../Images/nine.jpg'),
        },
        {
          id: 10,
          name: 'ten', 
          email: 'ten@mail.com',
          avatar: require('../Images/seven.jpg'),
          company: require('../Images/ten.jpg'),
        },
      ],
        skills: [
        {
          id: 1,
          name: 'one',
        },
        {
          id: 2,
          name: 'two',
        },
        {
          id: 3,
          name: 'three',
         },
         {
          id: 4,
          name: 'four',
         },
         {
          id: 5,
          name: 'five',
        },
        {
          id: 6,
          name: 'six',
        },
     ],
    };
  }

  submitTag = (tag) => {
    this.setState({ tagQuery: tag });
  }

  render() {

  const SearchStyle = {
    borderTopWidth: 1, 
    borderColor: '#fff', 
    backgroundColor: 'white',
    marginBottom: viewPort * .01,
  };
    // Skill tags
    const Tags = this.state.skills.length !== 0 
      ? <SkillList skills={this.state.skills} submit={this.submitTag} />
      : null

    // Pre-search Content OR search results
    const ResultsOrPresearchContent = this.state.tagQuery 
              ? <ResultsList results={this.state.results} />
              : <PreSearch />

    return (
      <ScrollView style={styles.SearchBody}>

        {/* Search input header */}
          <View style={SearchStyle}>
            <Item>
              <Icon name='search' />
              <Input placeholder='Find a space in your state!'/>
              <Icon name="ios-people" />
            </Item>
          </View>

        {/*<View style={styles.searchHeader}>

          <Item>
            <Icon name="ios-search" />

            <TextInput
              style={styles.searchTextInput} 
              placeholder="member search" 
              onChangeText={(text) => this.getQuery(text) }
              returnKeyType="search"
              underlineColorAndroid="transparent"
            />

            <Icon name="ios-people" />
          </Item>

          <Button transparent>
            <Text>Search</Text>
          </Button>

        </View>*/}

        {/* Content Container */}
        <View style={styles.searchContent}>

          <Text style={styles.searchHeaderTwo}> 
            Popular Tags 
          </Text>

          {Tags}
          {ResultsOrPresearchContent}

        </View>
      </ScrollView>
    );
  }
}
export default UserSearch;
