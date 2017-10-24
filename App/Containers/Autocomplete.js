import Autocomplete from 'react-native-autocomplete-input';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View, 
  Image
} from 'react-native';
import { Header, Item, Input, Icon, Button, Card, CardItem, Body, List, ListItem, H2, H3 } from 'native-base';

const API = 'https://randomuser.me/api';



class AutocompleteExample extends Component {
  static renderFilm(film) {
    const results = user; 
    const { name, picture } = user;
  

    return (
      <View>
        <Image source={user.picture} style={{width: 50, height: 50}} />
        <Text> {name} </Text>
      </View>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      films: [],
      query: ''
    };
  }

  componentDidMount() {
    fetch(`${API}?inc=name,picture`).then(res => res.json()).then((json) => {
      const { results: users } = json;
      this.setState({ users });
    });
  }

  findUser(query) {
    if (query === '') {
      return [];
    }

    const { films } = this.state;
    const regex = new RegExp(`${query.trim()}`, 'i');
    return users.filter(user => user.name.search(regex) >= 0);
  }

  render() {
    const { query } = this.state;
    const users = this.findUser(query);
    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();

    return (
      <View style={styles.container}>
        <Autocomplete
          autoCapitalize="none"
          autoCorrect={false}
           
          containerStyle={styles.autocompleteContainer}
          data={users.length === 1 && comp(query, users[0].title) ? [] : users}
          defaultValue={query}
          onChangeText={text => this.setState({ query: text })}
          placeholder="Find your name"
          renderItem={({ picture, name }) => (
            <TouchableOpacity onPress={() => this.setState({ query: title })}>
              <Text style={styles.itemText}>
                {name} ({release_date.split('-')[0]})
              </Text>
            </TouchableOpacity>
          )}
        />
        <View style={styles.descriptionContainer}>
          {users.length > 0 ? (
            AutocompleteExample.renderUser(users[0])
          ) : (
            <Text style={styles.infoText}>
            </Text>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEEEEE',
    flex: 1,
    paddingTop: 25
  },
  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1, 
  },
  itemText: {
    fontSize: 15,
    margin: 2
  },
  descriptionContainer: {
    // `backgroundColor` needs to be set otherwise the
    // autocomplete input will disappear on text input.
    backgroundColor: '#EEEEEE',
    marginTop: 25,
    height: 200, 
  },
  infoText: {
    textAlign: 'center'
  },
  titleText: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center'
  },
  directorText: {
    color: 'grey',
    fontSize: 12,
    marginBottom: 10,
    textAlign: 'center'
  },
  openingText: {
    textAlign: 'center'
  }, 
  inputContainer: { 
    fontSize: 18, 
  }
});

export default AutocompleteExample;
