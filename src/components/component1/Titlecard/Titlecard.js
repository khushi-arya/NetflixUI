import React, { useEffect,  useState } from 'react';
import './Titlecard.css';
import axios from 'axios';
import play from '../../../assets/play_icon.png';

export default function Titlecard({title ,param }) {
 
  const API_KEY = 'cebc5292e2c854ac20b761dd9c6f0588';
  const BASE_URL = 'https://api.themoviedb.org/3';
  const NOW_PLAYING_URL = `${BASE_URL}/movie/${param}?api_key=${API_KEY}&language=en-US&page=1`;

 
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      axios.get(NOW_PLAYING_URL)
        .then(response => {
          setMovies(response.data.results);
          // console.log(response.data.results);
        })
        .catch(error => {
          console.error("There was an error fetching the movie data!", error);
        });
    }, []);


  return (
 
  <div className='titlecard'>

   <h2>{title?title:"Now Playing"}</h2> 
   
  <div className='cardlist'>
  
      {movies.map((movie, index) => (
      <div key={index} className='card'>
        <img src={'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path} alt={movie.title} />

        <div className='movie-op'>
        <p>{movie.original_title}</p>
        <div className='effect'>       
        <button>+</button>   
        <img src={play} />   
        </div>
         </div>
           
      

       
      </div>
    ))}
    </div>
    
 
</div>
  )
}

