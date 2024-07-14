import React, { useEffect, useState } from 'react';
import "./Player.css";
import back_arrow from '../../assets/back_arrow_icon.png';
import axios from 'axios';


const Player = () => {

    const [apidata , setapidata] = useState({
        name : " ",
        key :" ",
        published : "  ",
        typeof : "  "
    });

   const URL =" https://api.themoviedb.org/3/movie/movie_id/videos?language=en-US";

   axios.get(URL).then(res => console.log(res))

    

    return (
        <div className='player'>
         <img src={back_arrow} className='arrow'/> 
            <iframe width='90%' height='90%' src='https://www.youtube.com/embed/hkHHwA-vEyQ' title='trailer' allowFullScreen></iframe>
            <div className='player-info'>
                <p>Published Date</p>
                <p>Name</p>
                <p>Type</p>
            </div>
        </div>
    );
};

export default Player;