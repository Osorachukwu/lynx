import React from 'react'
import 'boxicons/css/boxicons.min.css'; //box-icons can be imported here or on the html file
import { useState } from 'react';
import { Link } from 'react-router-dom'; //importing the link to be used 


const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
    function toggle() {
        setIsOpen(!isOpen);
        
    }
    //this code above uses useState and a function is responsible for toggle


  return (
    <div style={{position: "relative", zIndex: '5'}}>
       <div className='icons' onClick={toggle}>
         { !isOpen && <i className='bx bx-menu'></i>}
         { isOpen && <button>X</button>}
       </div>

        { isOpen && <div className='nav' style={{position: "absolute", fontSize: "20px", right: "20px"}}>
            <nav>
                <ul style={{backgroundColor: "white", padding: '5px' , borderRadius: '10px', display: 'flex' ,flexDirection: 'column'}}>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/About'><li>About</li></Link>
                    <Link to='/Services'><li>Services</li></Link>
                    <Link to='/Experience'><li>Experience</li></Link>
                    <Link to='/Work'><li>Work</li></Link>
                    <Link to='/Contact'><li>Contact</li></Link>
                </ul>
            </nav>
        </div>}
    </div>
  )
};

export default Nav

