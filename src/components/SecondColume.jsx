import React from 'react'
import Nav from './Nav'
import Transition from './Transition'

const SecondColume = ({ pageManager, setPageManager }) => {
  return (
    <div className='col-2' style={{width: "50%", backgroundColor: "rgb(213,196,85)"}}>
        <div style={{display: 'flex', flexDirection: 'row-reverse', padding: "20px 100px"}}>
        <Nav />
        </div>
        <Transition />

    </div>
  )
}

export default SecondColume