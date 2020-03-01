import React from 'react'
import '../styles/Item.css'

export default class Item extends React.Component {
  constructor() {
    super()
  }

  change(event) {
    if (this.props.changeFn) {
      this.props.changeFn(event.target.value)
    }
  }

  remove() {
    if (!this.props.changeFn) {
      this.props.removeItem()
    }
  }

  render() {
    return (
      <li className='item'>
        <input
          onBlur={this.props.createFn}
          onInput={this.change.bind(this)}
          onClick={this.remove.bind(this)}
          value={this.props.name}
        />
      </li>
    )
  }
}
