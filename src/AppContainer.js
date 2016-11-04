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
    // default items load
    // this.loadItems(this.state.filter)
    this.fetchJobs()
  }

  fetchJobs() {
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
    // ev.preventDefault()
    // ev.stopPropagation()
    console.log(tag)
    const currentFilterTag = self.state.filterTag
    self.setState({filterTag: (currentFilterTag === tag) ? null : tag})
    console.log(this)
    // console.log(this.filterTag)

    // const currentFilterTag = this.filterTag
    // this.setState({filterTag: (currentFilterTag === tag) ? null : tag})
    // console.log(this)
  }

  // loadItems (filter) {
  //   this.setState({filter: filter})
  //   // HACK: to avoid React state change race condition
  //   setTimeout(() => {
  //     this.loadMore('reset')
  //   }, 0)
  // }


// pass state and set filter
  render () {
    return (
      <App 
        setFilterTag={this.setFilterTag}
        {...this.state} />
    )
  }
}
