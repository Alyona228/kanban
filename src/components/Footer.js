import React from 'react'
import '../styles/Footer.css'

function Footer(params) {
  console.log(params)
  return (
    <div className='footer'>
      <div className='footer__left'>Active tasks: &#8249;N&#8250; </div>
      <div className='footer__centr'>Finished tasks: &#8249;M&#8250; </div>
      <div className='footer__right'>
        Kanban board by &#8249;NAME&#8250;, &#8249;YEAR&#8250;{' '}
      </div>
    </div>
  )
}

export default Footer
