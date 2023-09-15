import React from 'react'

function Button1({ text }) {
  return (
    <button style={{backgroundColor: "rgb(213,196,85)", padding: "10px", marginRight: "5px"}}>
        { text }
        <i className='bx bx-right-arrow-alt'></i>
    </button>
  )
}

export default Button1