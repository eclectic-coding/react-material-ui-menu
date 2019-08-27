import React, { Component } from 'react'
import { Router } from '@reach/router'
// Components
import Menubar from './components/navbar/Menubar'
import Home from './components/pages/Home'
import Projects from './components/pages/Projects'
import About from './components/pages/About'
import Footer from './components/Footer'

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Menubar />
        <Router>
          <Home path='/' />
          <Projects path='/projects' />
          <About path='/about' />
        </Router>
        <Footer />
      </React.Fragment>
    )
  }
}
