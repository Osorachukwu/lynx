import React from 'react'
import ghost from '../assets/IMG_20220710_103408-removebg-preview.png'
import Header from './Header'
import Hero from './Hero'
import Footer from './Footer'
import Buttons from './Buttons/Buttons'

const FirstColume = () => {
  return (
    <div className='col-1' style={{display: 'flex',   flexDirection: 'column', justifyContent: 'space-between', paddingBottom: '20px'}}>
        
        <Header />

        <div className='mobileProfileHolder' style={{width: '150px', height: "150px", borderRadius: '50%', position: 'relative', padding: '5px', backgroundColor: 'yellow', marginTop: '20px'}}>
        <img className='vanishing' src={ghost} alt=""/>
        </div>

        <Hero />
        <Buttons />
        <Footer /> 
    </div>
  )
}

export default FirstColume