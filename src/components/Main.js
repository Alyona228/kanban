import React from 'react'
import '../styles/Main.css'

import Board from './Board.js'

function Main(params) {
  return (
    <div className='body__boards'>
      <Board />
      <Board />
      <Board />
      <Board />
    </div>
  )
}

export default Main
