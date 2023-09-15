import React from 'react'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutSection1 from './About/AboutSection1'

function About() {
  return (
    <div className='bout overflow-y-scroll px-20'>
        <div className='flex justify-between bg-gray-200 item-center'>
         <Header />
         <Nav />
        </div>
        <AboutSection1 />
        
        <Footer />
    </div>
  )
};

export default About