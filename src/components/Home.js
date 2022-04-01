import React from 'react'
import Navigation from './Navigation'
import Introduction from './Introduction'
import AboutMe from './AboutMe'
import Projects from './Projects'
import ContactMe from './ContactMe'

export default function Home() {
  return (
      <>
        <Navigation />
        <Introduction />
        <AboutMe />
        <Projects />
        <ContactMe />
    </>
  )
}
