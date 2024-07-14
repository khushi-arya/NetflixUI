import React from 'react';
import './Footer.css';
import facebok from '../../images/facebook_icon.png';
import insta from '../../images/instagram_icon.png';
import twt from '../../images/twitter_icon.png';
import utube from '../../images/youtube_icon.png';

export default function Footer() {
  return (
    <div>
    <div className='footer'>
    <div className='footer-icons'>
        <img src={ facebok}/>
        <img src={insta}/>
        <img src = {twt}/>
        <img src={utube}/>
    </div>     
    <ul>
      <li>Audio Description</li>
      <li>Help Center</li>
      <li>Gift Cards</li>
      <li>Media Center</li>
      <li>Investor Relation</li>
      <li>Jobs</li>
      <li>Terms of Use</li>
      <li>Privacy</li>
      <li>Legal Notice</li>
      <li>Cookie Preference</li>
      <li>Coporate Information</li>
      <li>Contact Us</li>
     
    </ul> 
    <p className='copyrighttext'>@ 1997-2023 Netflix , Inc</p>
    </div>
    
    </div>
  )
}
