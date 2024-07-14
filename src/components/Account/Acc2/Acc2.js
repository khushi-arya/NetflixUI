import React, { useEffect, useState } from 'react';
import './Acc2.css';
import {  useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../images/logo.png';
import axios from 'axios';


const Acc2 = () => {

    const [email,setEmail]=useState('')
    const [password, setPassword] = useState('');   
    const [ response , setResponse] = useState(''); 
    let Navigate = useNavigate();
    // for navigation
    let handel =()=>{
       Navigate('/Signup');
    }

    const handeldata = (e) => {
        e.preventDefault();
        if (password) {
           
            Navigate('/Home1');
        } else {
            alert("Please Enter Password");
        }
    };
    
    useEffect(()=>{
        setEmail(sessionStorage.getItem("mail"))},[]
    )

    const handelform = async (e)=>{
        e.preventDefault();
   const response = await axios.post('https://66501dccec9b4a4a6030c5a8.mockapi.io/formdata' , {
    email , password
   })
   setResponse(response.data);
   Navigate('/Home1');
    }
    console.log(response)
   
    return (
        <div>
            <div className='nav'>
             <nav>
                <img src={logo} className="logo1"/>
                <div className='btn'>                    
                    <button  onClick={handel}>Sign In</button>
                </div>              
            </nav>
            </div>

            <div className='box2'>
            <div className='acc2-box-content'>
            <h6>step 1 of 2</h6>
            <h4>Create a password to start your membership</h4>
             <p>Just a few more steps and you're done!
             We hate paperwork, too.</p>
             <form onSubmit={ handelform }>
             <input 
                            type='email' 
                            className='acc2input' 
                            name="email" 
                            value={email}   
                            onChange={(e) => setEmail(e.target.value)}                   
                        /><br/>
           <input 
                            type='password' 
                            placeholder='Add password' 
                            name="password" 
                            className='acc2input' 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        /> <br/>    
            {/* <button className='acc2input active' onClick={opertation}>NEXT</button>    */}
             <button className='acc2input active' type='submit'>NEXT</button>  
            </form>          
            </div>
            </div>

         
        </div>
    );
};

export default Acc2;