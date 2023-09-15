import React from 'react'
import FirstColume from './components/FirstColume'
import SecondColume from './components/SecondColume'

function Home({ pageManager, setPageManager }) {
  return (
    <div className='flex' style={{height: '100vh'}}>
        <FirstColume />
        <SecondColume /> 
    </div>
  )
}

export default Home