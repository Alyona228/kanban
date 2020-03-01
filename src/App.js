import React from 'react'
import KHeader from './components/KHeader.js'
import './App.css'
import Main from './components/Main.js'
import Footer from './components/Footer.js'
import Button from './components/Button.js'

export default class App extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className='App'>
        <KHeader />
        <Main />
        <Footer />
      </div>
    )
  }
}
