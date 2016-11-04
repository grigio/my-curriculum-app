import React, {Component} from 'react'
import { Text, View,
  TouchableHighlight, ScrollView,
  StatusBar, ActivityIndicator, Dimensions,
  Platform, Image, StyleSheet, Linking } from 'react-native'

import github from './github.png'
import twitter from './twitter.png'
import linkedin from './linkedin.png'
import me from './me.jpg'


export default function Header() {

  // TODO move to AppContainer
  function openUrl (url) {
    if (Platform.OS === 'web') {
      window.open(url, '_blank')
    }
    if (Platform.OS === 'android' || Platform.OS === 'ios') {
      Linking.openURL(url).catch(err => console.error('An error occurred', err))
    }
  }

  return (
    <View style={{flex:1, height:200, backgroundColor:'rgb(81, 81, 81)'}}>
          <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
                alignItems:'center'
          }}>
            <Image source={me} style={{marginTop:10, width: 80, height: 80, borderRadius:40, borderWidth:1.5, borderColor: '#eee', backgroundColor: 'powderblue'}} />

            <Text style={{marginTop:10, fontSize:24, color:'white'}}>Hi, I'm Luigi Maselli</Text>
            <Text style={{margin:2, fontSize:16, color:'rgb(170, 170, 170)'}}>FullStack Web Developer and more</Text>        
          </View>
          <View style={{
            marginTop:5,
            flex: 0,
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 10,
          }}>
            <TouchableHighlight
              onPress={() => openUrl('https://github.com/grigio') }>
              <Image source={github} style={{width: 30, height:30}} />
            </TouchableHighlight>

            <TouchableHighlight
              onPress={() => openUrl('https://twitter.com/grigi0') }>
              <Image source={twitter} style={{width: 30, height:30}} />
            </TouchableHighlight>

            <TouchableHighlight
              onPress={() => openUrl('https://linkedin.com/pub/luigi-maselli/24/200/9a0') }>
              <Image source={linkedin} style={{width: 30, height:30}} />
            </TouchableHighlight>
          </View>
    </View>
  )
}

