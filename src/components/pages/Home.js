import React from 'react'
//Components
import Hero from '../Hero'
import Skills from '../sections/Skills'
// import Banner from '../HeroBanner'
import Portfolio from '../sections/Portfolio'

export default function Home() {
  return (
    <React.Fragment>
      <Hero>text</Hero>
      <Skills>{/* <Banner /> */}</Skills>
      <Portfolio />
    </React.Fragment>
  )
}
