import React from 'react';
import { 
  View,
  ScrollView,
  Text, 
  Image,
  TouchableOpacity, 
  Dimensions
} from 'react-native';

import { Icon, Left, Right } from 'native-base';
import styles from './Style';

const ResultsList = (props) => {
  const Results = props.results.map(result =>
    <SpaceCard 
      key={`spaceresult${result.id}`} 
      avatar={result.avatar} 
      company={result.company} 
      name={result.name} 
    />
  );

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <Text style={styles.resultsListHeaderText}>
        Results
      </Text>

      <View style={styles.resultsListContainer}>
        {Results}
      </View>
    </ScrollView>
  );
}
export default ResultsList;

function SpaceCard(props) {

  return (
    <TouchableOpacity style={styles.resultCard}>

      <Left>
        <Image style={styles.resultImage} source={props.avatar} />
      </Left>

      <View style={styles.resultTextContainer}>

        <Text style={styles.resultNameWidth}> 
          {props.name}
        </Text>

        <Text style={styles.resultCompanyWidth}>
          {props.company}
        </Text>
      </View>

      <Right>
        <Icon name="arrow-forward" />
      </Right>

    </TouchableOpacity>
  );
}
