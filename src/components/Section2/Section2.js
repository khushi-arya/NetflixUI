import React from 'react';
import './Section2.css';
import feature2 from '../../images/feature-2.png';

export default function Section2() {
  return (
    <div>
        <div className="feature">            
                <div className="text">
                    <h1>Download your shows to watch offline</h1>
                    <p>Save your favourites easily and always have something to watch.</p>
                </div>
                <div className="img-1">
                   <img src={feature2}/>
                </div>
            </div>
    </div>
  )
}
