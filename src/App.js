import React from 'react'
import KHeader from './components/KHeader.js'
import './App.css'
import Main from './components/Main.js'
import Footor from './components/Footor.js'
import Button from './components/Button.js'

function App() {
  return (
    <div className='App'>
      <Button />
      <KHeader />
      <Main />
      <Footor />
    </div>
  )
}

export default App
