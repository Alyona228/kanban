import React from 'react'
import '../styles/KHeader.css'
import avatar from '../images/user-avatar.svg'
import arrow from '../images/arrow-down.svg'

function KHeader() {
  return (
    <div className='heder'>
      <h1 className='heder__title'>Awesome Kanban Board</h1>
      <img src={avatar} className='heder__avatar' />
      <img src={arrow} className='heder__arrow' />
    </div>
  )
}

export default KHeader
