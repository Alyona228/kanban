import React from 'react'
import '../styles/Board.css'
import menuButton from '../images/1.svg'
import Item from './Item'
import '../styles/Item.css'
import CreateItem from './CreateItem'

export default class Board extends React.Component {
  constructor() {
    super()
    this.state = {
      newItem: null,
    }
  }
  addItemAnyword() {
    if (this.state.newItem === null) {
      this.setState({
        newItem: 'text',
      })
    }
  }

  removeItemAnyword() {
    this.setState({
      newItem: null,
    })
  }

  changeNewItem(text) {
    this.setState({
      newItem: text,
    })
  }

  createNewItem() {
    if (this.state.newItem !== null) {
      this.props.addItem(this.state.newItem)
      this.setState({
        newItem: null,
      })
    }
  }

  render() {
    let items = this.props.items.map((item, index) => {
      return (
        <Item
          removeItem={this.props.removeItem.bind(this, index)}
          name={item}
          key={index}
        />
      )
    })
    let addItemElement
    if (this.props.itemsToAdd() === null) {
      addItemElement =
        this.state.newItem !== null ? (
          <Item
            createFn={this.createNewItem.bind(this)}
            changeFn={this.changeNewItem.bind(this)}
            text={this.state.item}
          ></Item>
        ) : (
          ''
        )
    } else {
      addItemElement =
        this.state.newItem === null ? (
          ''
        ) : (
          <select>
            {this.props.itemsToAdd().map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
        )
    }

    return (
      <div className='board'>
        <div className='backlog'>
          {this.props.name}
          <img src={menuButton} alt='это аватар' className='img' />
        </div>
        <ul className='list'>
          <CreateItem></CreateItem>
          {this.props.addItemElement}

          <button
            className='buttons__button buttons__button--add'
            onClick={this.addItemAnyword.bind(this)}
          >
            +Add card
          </button>
        </ul>
      </div>
    )
  }
}
