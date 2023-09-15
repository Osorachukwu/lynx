import React from 'react'

function Button2({ text }) {
  return (
    <button style={{backgroundColor: "rgb(255,255,255)", padding: "10px"}}>
      {text}
      <i className='bx bx-right-arrow-alt'></i>
   </button>
    
  )
}

export default Button2