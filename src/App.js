import React, {PropTypes, Component} from 'react'
import { Text, View,
  TouchableHighlight, ScrollView,
  StatusBar, ActivityIndicator, Dimensions,
  Platform, Image, StyleSheet } from 'react-native'

// assets
import { color } from 'react-native-material-design-styles'
// import styles from './AppStyles'

// utils
import moment from 'moment'


import Header from './Header'
import Hero from './Hero'
import Pill from './Pill'

const cursorStyle = Platform.OS === 'web' ? {cursor: 'pointer'} : {}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'red',
    height: 200,
            // flex:1,
            justifyContent:'center',
        alignItems:'center'     //<-----
  },
  content: {
    backgroundColor: 'yellow',
    justifyContent:'center',
    flex: 1, // push down Social nav
  },
  socialNav: { 
  flexDirection:'row', justifyContent:'space-between', backgroundColor:'blue'
  }
})


export default class App extends Component {
  static propTypes = {
    filterTag: PropTypes.string,
    setFilterTag: PropTypes.func.isRequired,
  }
  constructor (props) {
    super(props)
    // this.props.setFilterTag.bind(this)

  }

  render () {
    // const { items, errors, loading, filter, overlayVisible, onLoadMore, onLoadItems, onOpenUrl, onToggleOverlay } = this.props

function isMobile() {
  return Dimensions.get('window').width < 500
}

const styles = StyleSheet.create({
  box: {
    flexDirection:'column',
    alignItems:'center'
  },
  boxRow: {
    marginTop:10,
    flexDirection: (isMobile()) ? 'column-reverse' : 'row',
    width: (isMobile()) ? Dimensions.get('window').width : 720,
  },
  mainColumn: {
    backgroundColor:'white',
    padding: 10,
    flex:1
  },
  sideColumn: {
    backgroundColor:'white',
    padding: 5,    
    width: (isMobile()) ? null : 250
  }
})

    const { jobs, filterTag } = this.props
    const tags = "javascript,react,linux,mongodb,android,meteor,php,rails,ruby,nginx,teacher,docker,ubuntu,mysql,cordova".split(',').sort()

    return (
      <View>
        {Platform.OS === 'android' ? (
          <StatusBar backgroundColor={'#d25500'} />
        ) : <View />}

        <Header />
        <ScrollView>
        <Hero />

        <View style={styles.box}>
          <View style={styles.boxRow}>
            <View style={styles.mainColumn}>

{jobs
  .filter((job) => filterTag ? job.technologies.includes(filterTag) : true)
  .map((job) => (
    <View key={job.company} style={{marginBottom: 10}}>
      <Text style={{fontSize: 20}}>{job.role}</Text>
      <Text style={{fontSize: 14}}>{job.company} ({job.year})</Text>
      <Text style={{color: 'rgb(146, 146, 146)'}}>{job.desc}</Text>

    </View>
))}

  {(jobs.length === 0 ) ? (
    <View><Text>No jobs available or loaded. Check your connection.</Text></View>
  ): null}
            </View>
            <View style={styles.sideColumn}>

            <View style={{flexDirection:'row', flexWrap: 'wrap'}}>



              {tags.map(tag => (
                <Pill name={tag}
                  key={tag}
                  active={(this.props.filterTag === tag)}
                  handlePress={this.props.setFilterTag} />
              ))}

            </View>
            </View>
          </View>
        </View>






<View>







</View>
  </ScrollView>
  </View>





    )
  }
}
