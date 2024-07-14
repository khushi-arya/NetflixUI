import React, { useEffect, useState } from 'react';
import "./Navbar.css";
import logo from '../../component1/assets/logo.png';
import search from '../../component1/assets/search_icon.svg';
import bell  from '../../component1/assets/bell_icon.svg';
import profile  from '../../component1/assets/profile_img.png';
import cart  from '../../component1/assets/caret_icon.svg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



export default function Navbar() {
     
  const [movie , setmovie] = useState([]);
  



 let Move = useNavigate();
   
   const showMovie = (e)=>{

      Move('/seacrchbar' , {state:{movie}})
  }
  

   


  return (
    <div className='outer'>
    <div className='navbar'>
        <div className='navbar-left'>
          <img src={logo} alt=""/>
          <ul>
            <li>Home</li>
            <li>TV Show</li>
            <li>Movies</li>
            <li>New and Poupular</li>
            <li>My List</li>
            <li>Browse by Language</li>
          </ul>
        </div>

        <div className='navbar-right'>
        <form onSubmit={showMovie}>
        <input type='search' className='search-bar' placeholder='seacrch'
         onChange={(e) => setmovie(e.target.value)} />
         </form>
        <p>Children</p>       
        <img src={bell} className='icons' />
        <div className='navbar-profile'>
        <img src={profile} className='profile' />
        <img src={cart} className=''/>
        <div className='dropdown' >
        <p>Sign Out</p>
        </div>
        </div> </div>

        </div>
    </div>
  )
}
