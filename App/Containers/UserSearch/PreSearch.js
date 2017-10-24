import React from 'react';
import { View, Text,  Dimensions, Image } from "react-native";
// styles
import styles from './Style';

const PreSearch = () =>
  <View style={styles.preSearchContainer}>

    <View style={styles.preSearchContentContainer}>

      <Text style={styles.preSearchContent}>
        make connections
      </Text>

      <View style={styles.preSearchImageContainer}>
        <Image 
          source={require('../Images/conn7.jpg')} 
          style={styles.preSearchImage} 
        />
      </View>

    </View>

  </View>;
export default PreSearch;
