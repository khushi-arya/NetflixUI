import React from 'react';
import feature3 from '../../images/feature-3.png';
import feature4 from '../../images/feature-4.png';

export default function 
() {
  return (
    <div>
        <div className="feature">
            <div className="row">
                <div className="text">
            <h1>Watch everywhere</h1>
            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
            </div>
            <div className="img-col">
            <img src={feature3}/>
            </div>
        </div>
        </div>

        <div className="feature">            
            <div className="text">
                <h1>Create profiles for kids</h1>
                <p>Send children on adventures with their favourite characters
                     in a space made just for them—free with your membership.</p>
            </div>
            <div className="img-1">
               <img src={feature4}/>
            </div>
        </div>
    </div>
  )
}
