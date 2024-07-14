import React from 'react';
import logo from '../../images/logo.png';
import down from "../../images/down-icon.png";
import { useNavigate } from 'react-router-dom';
import './Nav.css';
const Nav = () => {

 let Navigate = useNavigate();
 let handel =()=>{
    Navigate('/Signup');
 }
 

    
    return (
        
            <div className='nav'>
             <nav>
                <img src={logo} className="logo1"/>
                <div className='btn'>
                    <button className="language-btn">English<img src={down}/></button>
                    <button className=" active" onClick={handel}>Sign In</button>
                </div>
              
            </nav>
      
</div>
        
    );
};

export default Nav;