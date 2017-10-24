import React, { Component } from 'react';
import { 
  View, 
  ScrollView, 
  Image,
  Dimensions
} from 'react-native';

import { 
  Item, 
  Icon, 
  Input, 
} from 'native-base';
// components
import ResultsList from './SpaceSearchResult';
// styles
import styles from './Style';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      tagQuery: '',
      inutQuery: '',
      // results: [],
      results: [
        {
          id: 1,
          name: 'clubhouse', 
          email: 'dude@mail.com',
          avatar: require('../Images/house.png'),
          company: 'Augusta, Georgia'
        },
        {
          id: 2,
          name: 'clubhouse', 
          email: 'dudette@mail.com',
          avatar: require('../Images/house.png'),
          company: 'Augusta, Georgia'
        },
        {
          id: 3,
          name: 'clubhouse', 
          email: 'sue@mail.com',
          avatar: require('../Images/house.png'),
          company: 'Augusta, Georgia'
        },
        {
          id: 4,
          name: 'clubhouse', 
          email: 'four@mail.com',
          avatar: require('../Images/house.png'),
          company: 'Augusta, Georgia'
        },
        {
          id: 5,
          name: 'clubhouse', 
          email: 'five@mail.com',
          avatar: require('../Images/house.png'),
          company: 'Augusta, Georgia'
        },
        {
          id: 6,
          name: 'clubhouse', 
          email: 'six@mail.com',
          avatar: require('../Images/house.png'),
          company: 'Augusta, Georgia'
        },
        {
          id: 7,
          name: 'clubhouse', 
          email: 'seven@mail.com',
          avatar: require('../Images/house.png'),
          company: 'Augusta, Georgia'
        },
        {
          id: 8,
          name: 'clubhouse', 
          email: 'eight@mail.com',
          avatar: require('../Images/house.png'),
          company: 'Augusta, Georgia'
        },
        {
          id: 9,
          name: 'clubhouse', 
          email: 'nine@mail.com',
          avatar: require('../Images/house.png'),
          company: 'Augusta, Georgia'
        },
        {
          id: 10,
          name: 'clubhouse', 
          email: 'ten@mail.com',
          avatar: require('../Images/house.png'),
          company: 'Augusta, Georgia'
        },
      ],
    };
  }

  render() {
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <Image 
          source={require('../Images/world6.jpg')} 
          style={styles.SearchImage} 
        >
          {/* Search Bar */}
          <View style={styles.SearchStyle}>
            <Item>
              <Icon name='search' />
              <Input placeholder='Find a space in your state!'/>
            </Item>
          </View>
        </Image>

        {/* Search Results */}
        <ResultsList results={this.state.results} />
      </ScrollView>
    );
  }
}
export default Search;