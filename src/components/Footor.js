import React from 'react'
import '../styles/Footor.css'

function Footor(params) {
  console.log(params)
  return (
    <div className='footor'>
      <div>Active tasks:</div>
      <div>Finished tasks:</div>
      <div>Kanban board by </div>
    </div>
  )
}

export default Footor
