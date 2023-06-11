// Write your code here

import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isClick: true, container: 'mini-container-dark'}

  click = () => {
    const {isClick} = this.state
    const {container} = this.state
    if (isClick === true) {
      this.setState({isClick: false})

      this.setState({container: 'mini-container-light'})
    } else {
      this.setState({isClick: true})
      this.setState({container: 'mini-container-dark'})
    }
  }

  render() {
    const {isClick} = this.state
    const {container} = this.state

    return (
      <div className="big-container">
        <div className={container}>
          {isClick ? (
            <h1 className="lightHeading">Click To Change Mode</h1>
          ) : (
            <h1 className="darkHeading">Click To Change Mode</h1>
          )}
          {isClick ? (
            <button onClick={this.click}>Light Mode</button>
          ) : (
            <button onClick={this.click}>Dark Mode</button>
          )}
        </div>
      </div>
    )
  }
}

export default LightDarkMode
