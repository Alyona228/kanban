import React from 'react'
import '../styles/Item.css'

export default class Item extends React.Component {
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
        <p
          onBlur={this.props.createFn}
          onChange={this.change.bind(this)}
          onClick={this.remove.bind(this)}
          value={this.props.name}
        />
      </li>
    )
  }
}
