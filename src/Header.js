import React, {Component} from 'react'
import { Text, View,
  TouchableHighlight, ScrollView,
  StatusBar, ActivityIndicator, Dimensions,
  Platform, Image, StyleSheet } from 'react-native'

import logo from './github.png'
import me from './me.jpg'


export default function Header() {
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
          }}>
            <Image source={logo} style={{width: 30, height:30}} />
            <Image source={logo} style={{width: 30, height:30}} />
            <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
          </View>
    </View>
  )
}

