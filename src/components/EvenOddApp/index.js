import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
    type: 'even',
  }

  onIncrement = () => {
    this.setState(prevState => {
      const newCount = prevState.count + Math.floor(Math.random() * 101)
      if (newCount % 2 === 0) {
        return {count: newCount, type: 'even'}
      }
      return {count: newCount, type: 'odd'}
    })
  }

  render() {
    const {count, type} = this.state

    return (
      <div className="main-bg-container">
        <div className="card-container">
          <h1 className="heading">Count {count}</h1>
          <p className="paragraph">Count is {type}</p>
          <button className="button" type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="instruction">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
