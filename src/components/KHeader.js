import React from 'react'
import '../styles/KHeader.css'
import avatar from '../images/user-avatar.svg'
import arrow from '../images/arrow-down.svg'

export default class KHeader extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className='header'>
        <h1 className='header__title'>Awesome Kanban Board</h1>
        <img src={avatar} className='header__avatar' />
        <button className='header__button'>
          <img src={arrow} className='header__arrow' />
        </button>
      </div>
    )
  }
}
