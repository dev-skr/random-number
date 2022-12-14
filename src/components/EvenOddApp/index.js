import './index.css'

import {Component} from 'react'

class EvenOddApp extends Component {
  state = {value: 0}

  text = 'Count is Even'

  randomNumber = () => {
    const num = Math.floor(Math.random() * 100)
    this.setState(() => ({value: num}))
  }

  checker = val => {
    if (val % 2 === 0) {
      return 'even'
    }
    return 'odd'
  }

  render() {
    const {value} = this.state

    const bool = this.checker(value)

    if (bool === 'even') {
      this.text = 'Count is Even'
    } else {
      this.text = 'Count is Odd'
    }

    return (
      <div className="bg">
        <div className="card">
          <h1 className="counter">Count {value}</h1>
          <p className="text">{this.text}</p>
          <button type="button" className="button" onClick={this.randomNumber}>
            Increment
          </button>
          <p className="msg">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
