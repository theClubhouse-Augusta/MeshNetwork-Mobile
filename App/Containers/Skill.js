/**
*
* Skill
*
*/
import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
// styles
import styles from './Styles/UserSearchStyle';

const  SkillList = (props) => {

  const SkillTags = props.skills.map(skill =>
    <SkillTag 
      key={`skill${skill.id}`} 
      skill={skill.name} 
      submit={props.submit} 
    />
);

  return (
    <View style={styles.skillListContainer}>
      {SkillTags}
    </View>

  );
}
export default SkillList;

function SkillTag(props) {

  return (
    <TouchableOpacity 
      onPress={() => { props.submit(props.skill) }} 
      style={styles.skillTagContainer}
    >
      <Text style={styles.skillTagText}>
        {props.skill}
      </Text>
    </TouchableOpacity>
  );
}
