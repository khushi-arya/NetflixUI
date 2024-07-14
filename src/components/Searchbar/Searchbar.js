import React from 'react';
import card from "../../assets/cards/Cards_data";
import './Searchbar.css';
import img from "../../assets/cards/card1.jpg";
import { useLocation } from 'react-router-dom';

const Searchbar = () => {

  const Location = useLocation();
  const value = Location.state?.movie;
  console.log(value);  
  
    return (
       <div className='search-body'>
         <h1>Movie titile</h1>
          <img src={img}/> 
         
                </div>
    );
};

export default Searchbar;