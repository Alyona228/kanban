import React from 'react'
import '../styles/Main.css'
import menuButton from '../images/1.svg'

function Main(params) {
  return (
    <div className='body'>
      <div classname='backlog'>
        Backlog
        <img src={menuButton} className='img' />
      </div>
      <div className='body_select'>
        <p>Login page – performance issues</p>
      </div>
      <div className='body_select'>
        <p>Sprint bugfix</p>
      </div>
      +Add card
    </div>
  )
}

export default Main
