import React, {PropTypes, Component} from 'react'
import { Text, View,
  TouchableHighlight, ScrollView,
  StatusBar, ActivityIndicator, Dimensions,
  Platform, Image, StyleSheet } from 'react-native'

export default function Pill({name, active, handlePress}) {

const normalStyles = {
  button: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 4,
    paddingBottom: 4,
    borderRadius: 20,
    margin:3,
    borderWidth: 1,
    borderColor: 'rgb(100, 100, 100)',
    height: 28,
  },
  content: {
    color: 'rgb(100, 100, 100)'
  }
}

const activeStyles = {
  button: {
    ...normalStyles.button,
    backgroundColor:'rgb(81, 81, 81)'
  },
  content: {
    color: 'white'
  }
}

const styles = (active) ? activeStyles : normalStyles 

  return (
    <TouchableHighlight
      style={ styles.button}
      // underlayColor={styles.button.backgroundColor}
      onPress={() => handlePress(name) }
      >
      <View>
        <Text style={styles.content}>{name}</Text>
      </View>
    </TouchableHighlight>
  )
}

Pill.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  handlePress: PropTypes.func.isRequired,
}