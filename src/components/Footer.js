import React from 'react'
import '../styles/Footer.css'

function Footer(params) {
  console.log(params)
  return (
    <div className='footer'>
      <div>Active tasks:</div>
      <div>Finished tasks:</div>
      <div>Kanban board by </div>
    </div>
  )
}

export default Footer
