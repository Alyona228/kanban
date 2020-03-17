import React from 'react'
import '../styles/Main.css'
import Board from './Board.js'

export default class Main extends React.Component {
  constructor() {
    super()

    this.state = {
      boards: [
        {
          name: 'Backlog',
          items: ['Login page - performance issues', '', ''],
        },
        {
          name: 'Ready',
          items: ['', '', '', ''],
        },
        {
          name: 'In Progress',
          items: ['', '', ''],
        },
        {
          name: 'Finished',
          items: ['', '', ''],
        },
      ],
    }
  }

  addNewItem(index, item) {
    let newBoards = this.state.boards
    let board = newBoards[index]
    board.items.push(item)
    this.setState({
      boards: newBoards,
    })
  }

  removeItem(boardIndex, itemIndex) {
    let newBoards = this.state.boards
    let board = newBoards[boardIndex]
    board.items.splice(itemIndex, 1)
    this.setState({
      boards: newBoards,
    })
  }

  getPreviousBoardItems(boardIndex) {
    if (boardIndex > 0) {
      return this.state.boards[boardIndex - 1].items
    }
    return null
  }

  render() {
    const boards = this.state.boards.map((board, index) => {
      return (
        <Board
          itemsToAdd={this.getPreviousBoardItems.bind(this, index)}
          name={board.name}
          items={board.items}
          addItem={this.addNewItem.bind(this, index)}
          removeItem={this.removeItem.bind(this, index)}
          key={index}
        ></Board>
      )
    })
    return <div className='body__boards'>{boards}</div>
  }
}
