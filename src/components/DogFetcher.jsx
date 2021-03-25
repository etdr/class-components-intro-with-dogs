import React from 'react'

import UD from './Underdog'

export default class DogFetcher extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      url: '',
      interval: 0
    }
    this.fetchDog = this.fetchDog.bind(this)
  }

  componentDidMount () {
    console.log('DogFetcher component *did* mount!')
    this.fetchDog()

    this.setState({
      interval: setInterval(this.fetchDog, 5000)
    })
  }

  componentWillUnmount () {
    console.log('DogFetcher component *will* unmount!')
    clearInterval(this.state.interval)
  }

  async fetchDog () {
    const result = await fetch('https://dog.ceo/api/breeds/image/random')
    const jsonified = await result.json()
    this.setState({
      url: jsonified.message
    })
    console.log('dog successfully fetched')
  }


  render () {
    return (
      <div>
        <h1>Here is a <em>dog</em></h1>
        <img src={this.state.url} />
        <UD />
      </div>
    )
  }
}