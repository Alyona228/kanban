import React from 'react'
import '../styles/Board.css'
import menuButton from '../images/1.svg'

import Button from './Button'

export default class Board extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className='board'>
        <div className='backlog'>
          kjfgh;kljdsgh;
          <img src={menuButton} className='img' />
        </div>
        <div className='body__select'>
          <p>Login page – performance issues</p>
        </div>
        <div className='body__select'>
          <p>Sprint bugfix</p>
        </div>
        <button
          onClick={() =>
            console.log(
              <div className='body__select'>
                <p>Sprint bugfix</p>
              </div>
            )
          }
          className='body__button'
        >
          +Add card
        </button>
        <Button />
      </div>
    )
  }
}
