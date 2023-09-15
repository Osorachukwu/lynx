import React from 'react'

const Hero = () => {
    let myStyle = {
        fontSize: "1em",
        fontWeight: "bold",
        color: "rgb(213,196,85)",
       
    }
    let myStyle2 = {
        fontWeight: "bolder",
        color: "black"
        
    }
  return (
    <div className='hero' >
        <div>
            <p  style={myStyle}>
              UI/UX DESIGNER & DEVELOPER <br />
              <span className='myName' style={myStyle2}>I'm Osorachukwu <br />Ezewi </span>
            </p>
        </div>
    </div>
  )
};

export default Hero