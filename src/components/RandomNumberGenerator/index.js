// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    number: 0,
  }

  RandomChange = () => {
    const randomNumber = Math.random()
    this.setState({
      number: Math.ceil(randomNumber * 100),
    })
  }

  render() {
    const {number} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p className="desc">
            Generate a random number in the range of 0 to 100
          </p>
          <button onClick={this.RandomChange} className="btn" type="button">
            Generate
          </button>
          <p className="number">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
