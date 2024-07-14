import React from 'react';
import "./Section1.css";
import feature1 from "../../images/feature-1.png";

export default function 
() {
  return (
    <div>
         <div className="feature">
            <div className="row">
                <div className="text-col">
            <h1>Enjoy on your TV</h1>
            <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more</p>
            </div>
            <div className="img-col">
            <img src={feature1}/>
            </div>
        </div>
        </div>
    </div>
  )
}
