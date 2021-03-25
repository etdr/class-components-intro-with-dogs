import React from 'react'


class Counter extends React.Component {

  constructor (props) {
    super(props)
    
    this.state = {
      count: 0,
      incrementBy: '1'
    }

    this.incrementCount = this.incrementCount.bind(this)
  }

  // incrementCount () {
  //   this.setState({
  //     count: this.state.count + parseFloat(this.state.incrementBy)
  //   })
  // }

  incrementCount = () => {
    this.setState({
      count: this.state.count + parseFloat(this.state.incrementBy)
    })
  }



  render () {
    return (
      <div>
        <h1>Counter</h1>
        <p>The current count is: {this.state.count}</p>
        <input 
          value={this.state.incrementBy}
          onChange={e => this.setState({incrementBy: e.target.value})}
        />
        <button onClick={this.incrementCount}>Increment count</button>
      </div>
    )
  }
}

export default Counter