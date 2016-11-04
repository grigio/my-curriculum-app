import React, {Component} from 'react'
import { Text, View,
  TouchableHighlight, ScrollView,
  StatusBar, ActivityIndicator, Dimensions,
  Platform, Image, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  box: {
    flexDirection:'column',
    alignItems:'center',
    padding: (isMobile()) ? 3 : 27,
    backgroundColor:'rgb(100, 100, 100)',
  },
  content: {
    color: '#eee',
    flex: 0,
    margin:2,
    fontSize: (isMobile()) ? 20 : 29,
    width: (isMobile()) ? null : 720
  },
  content2: {
    color: 'rgb(170, 170, 170)',
    flex: 0,
    margin:2,
    fontSize: (isMobile()) ? 15 : 18,
    width: (isMobile()) ? null : 720
  }
})

function isMobile() {
  return Dimensions.get('window').width < 500
}

export default function Hero() {
  return (
    <View style={styles.box}>
      <Text style={styles.content}>I like to design and develop focused applications, components and digital products.</Text>
      <Text style={styles.content2}>I worked with several technologies, my current stack is JavaScript/React/React Native/NodeJS, but I'm also interested in other Open Source technlogies like Linux, Docker, GraphQL, DBs and the Rust programming language</Text>
    </View>
  )
}

