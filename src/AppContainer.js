/* global fetch */
import React , {Component} from 'react'
import { Linking, Platform } from 'react-native'

import App from './App'

export default class AppContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      filterTag: null,
      loading: true, // TODO
      me : {
        name: 'Luigi Maselli'
      },
      jobs: [] // loaded via fetchJobs()
    }
    self = this
  }

  componentDidMount () {
    // trigger items load
    this.fetchJobs()
  }

  fetchJobs() {
    // fetch(`https://grigio.github.io/my-curriculum-app/jobs.json`)
    fetch(`${process.env.PUBLIC_URL}/jobs.json`)
      .then( req => req.json())
      .then( json => this.setState({ jobs: json}) )
  }

  openUrl (url) {
    if (Platform.OS === 'web') {
      window.open(url, '_blank')
    }
    if (Platform.OS === 'android' || Platform.OS === 'ios') {
      Linking.openURL(url).catch(err => console.error('An error occurred', err))
    }
  }

  setFilterTag(tag) {
    const currentFilterTag = self.state.filterTag
    self.setState({filterTag: (currentFilterTag === tag) ? null : tag})
  }

// pass state and functions
  render () {
    return (
      <App 
        setFilterTag={this.setFilterTag}
        {...this.state} />
    )
  }
}
