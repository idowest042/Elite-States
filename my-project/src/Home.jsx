import React from 'react'
import Header from './components/header'
import Legacy from './components/Legacy'
import Featured from './components/Featured'
import Offer from './components/Offer'
import Testimonal from './components/testimonal'
import Contact from "./components/Contact"

const Home = () => {
  return (
    <div>
      <Header/>
      <Legacy/>
      <Featured/>
      <Offer/>
      <Testimonal/>
      <Contact/>
    </div>
  )
}

export default Home
