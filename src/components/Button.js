import React from 'react'
class Button extends React.Component {
  constructor() {
    super()
    this.state = {
      buttons: ['button1'],
      currentIndex: 2,
    }
  }

  handleClick() {
    const newButton = <button>{this.state.currentIndex + 0}</button>
    this.setState({
      buttons: this.state.buttons.push(newButton),
      currentIndex: this.state.currentIndex + 1,
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>{this.state.text}</button>
        <div>{this.state.buttons}</div>
      </div>
    )
  }
}
export default Button
