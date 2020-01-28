import React from 'react'
import '../styles/KHeader.css'

function KHeader() {
  return (
    <header className='header'>
      <h1 className='header__title'>Awesome Kanban Board</h1>
      <div className='header__account'>
        <div className='header__avatar'></div>
        <div className='header__arrow'></div>
      </div>
    </header>
  )
}

export default KHeader
