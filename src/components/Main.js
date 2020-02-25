import React from 'react'
import '../styles/Main.css'

import Board from './Board.js'

function Main(params) {
  return (
    <div className='body__boards'>
      <Board name='backlog' />
      <Board name='Ready' />
      <Board name='In Progress' />
      <Board name='Finished' />
    </div>
  )
}

export default Main
