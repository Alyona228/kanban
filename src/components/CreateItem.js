import React from 'react'
import '../styles/CreateItem.css'
import Item from './Item.js'

export default class CreateItem extends React.Component {
  constructor() {
    super()
    this.state = {
      text: 'none',
    }
  }

  AddHandler(e) {
    console.log(e.target)
    this.setState({
      text: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <input
          type='text'
          className='text'
          onBlur={this.AddHandler.bind(this)}
          defaultValue=''
        />
      </div>
    )
  }
}
