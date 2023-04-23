// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {
    isSubscribed: false,
  }

  onSubscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getButtonText = () => {
    const {isSubscribed} = this.state

    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()

    return (
      <div className="app-container">
        <h1 className="heading">Welcome</h1>
        <p className="message">Thank you! Happy Learning</p>
        <button
          type="button"
          className="subscribe-button"
          onClick={this.buttonText}
        >
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
