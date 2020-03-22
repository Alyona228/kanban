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
  newInput(text, index) {
    this.text = this.text
    this.index = index + 1
  }
  //   }
  // }
  // return(
  //   addnewInput() {
  //     if (this.state.newInput === null) {
  //       this.setState({
  //         newInput: 'text',
  //       })
  //     }
  //   })
  // }
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
          onBlur={this.AddHandler.bind(this)}
          defaultValue=''
          id='new'
          type='text'
          className='text'
        ></input>
      </div>
    )
  }
}
