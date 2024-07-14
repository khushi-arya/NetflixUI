import React from 'react';
import './Acc1.css';
import phone from '../../../images/phone.png';
import laptop from '../../../images/notebook-computer.png';
import tv from '../../../images/smart-tv.png';
import tablet from '../../../images/tablet.png';
import { useLocation, useNavigate } from 'react-router-dom';

const Acc1 = ( ) => {
      const location = useLocation();
      const email = location.state?.email;
      console.log(email);


    let Nav2 = useNavigate();
    function Myop1(){
     Nav2('/Acc2' ,{ state: { email } });
    }
   
    return (
        <div className='box1'>
        <div className='acc-box'>
             <div className='icon-list'>
                <img src={laptop}/>
                <img src={tv}/>
                <img src={tablet}/>
                <img src={phone}/>
             </div>
             <div className='acc-box-content'>
                <h6>step 1 of 2</h6>
                <h2>Finish setting up your account</h2>
                <p>
                Netflix is personalised for you.<br/> Create a password to watch on any <br/>device at any time.
                </p>
                <button onClick={Myop1} >NEXT</button>
             </div>
        </div>
            
        </div>
    );
};

export default Acc1;


  