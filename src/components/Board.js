import React from 'react'
import '../styles/Board.css'
// import menuButton from '../images/1.svg'
// import Item from './Item'
// import '../styles/Item.css'
// import CreateItem from './CreateItem'

export default class Board extends React.Component {
  constructor() {
    super()
    this.state = {
      showInput: false,
      flag: true,
    }
  }
  handleClickAdd = () => {
    this.setState({
      showInput: true,
    })
  }
  handleBlur =()=>{
    this.setState({
      flag:
    })
  }

  render() {
    return (
      <div className='board'>
        <div className='board-title'>{this.props.title}</div>
        {this.state.showInput ? (
          <input className='new-task-input' onBlur={this.handleBlur}/>
        ) : (
          undefined
        )}
        <ul className='list'>
          {this.props.tasks.map((item, ind) => (
            <li key={ind}>{item}</li>
          ))}
        </ul>
        <button
          className='buttons__button buttons__button--add'
          onClick={this.handleClickAdd}
        >
          +Add card
        </button>
      </div>
    )
  }
}
