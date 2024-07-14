import React, { useEffect, useState } from 'react';
import Navbar from '../../components/component1/Navbar/Navbar';
import hero from '../../assets/hero_banner.jpg';
import title from '../../assets/hero_title.png';
import play from '../../assets/play_icon.png';
import info from '../../assets/info_icon.png';
import Titlecard from '../../components/component1/Titlecard/Titlecard';
import Footer from '../../components/component1/Footer/Footer';
import './Home1.css';
import axios from 'axios';

const Home1 = () => {
  const API_KEY = 'cebc5292e2c854ac20b761dd9c6f0588';
const BASE_URL = 'https://api.themoviedb.org/3';
const URL = `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;


    const [movies ,setMovies] = useState([]);

useEffect(()=>{
  axios.get(URL)
  .then(response => {
    setMovies(response.data.results);
    console.log(response.data.results);
  })
  .catch(error => {
    console.error("There was an error fetching the movie data!", error);
  });
},[])



    return (
        <div className="home">
          <Navbar/>
          <div className="hero">
          
          <img src={hero} alt=" " className="banner-img"/>
          <div className="hero-caption">
            <img src={title} className="caption-img"/>
            <p>Discovering his ties to a secret anicent order, a young man living in modren Istanbul embarks on a quest to save the city from an immortal enemy.</p>
            <div className="hero-btn">
              <button className="btn"><img src= {play}/>Play</button>
              <button className="btn dark-btn"><img src= {info}/>More Info</button>
            </div>            
          </div>
        
         
    </div>
        <div className="morecard">        
          <Titlecard title={"Blockbuster Movies"} param={"now_playing"} />
          <Titlecard title={"Top Rated"} param={"top_rated"}/> 
          <Titlecard title={"Only on Netflix"} param={"popular"}/>
          <Titlecard title={"Upcoming"} param={"upcoming"}/>
        
          </div>  
          <Footer/>
        </div>
    );
};
//param={"top_rated"}
export default Home1;