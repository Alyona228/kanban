import React from 'react'
import '../styles/Board.css'
import menuButton from '../images/1.svg'

function Board(params) {
  return (
    <div className='body'>
      <div classname='backlog'>
        Backlog
        <img src={menuButton} className='img' />
      </div>
      <div className='body__select'>
        <p>Login page – performance issues</p>
      </div>
      <div className='body__select'>
        <p>Sprint bugfix</p>
      </div>
      <button className='body__button'>+Add card</button>
    </div>
  )
}

export default Board
