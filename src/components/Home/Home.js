import React, {  useEffect, useState  } from 'react';
import "./Home.css";
import Section1 from '../Section1/Section1';
import Section2 from '../Section2/Section2';
import Section3 from '../Section3/Section3';
import Section4 from '../Section4/Section4';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

 export default function Home() {
   const [email , setEmail] = useState('');
   const [output , setOutput] = useState([]);

   var mail=email
    sessionStorage.setItem("mail",email)   
   
   let Nav1 = useNavigate();
   const handelSubmit = (e) => {
    e.preventDefault();
    if(email){    
      console.log(email)
        Nav1('Acc1');
       
      }else{
        alert("Please Enter Email");
      }

  }  
   
    //console.log(mail);

    useEffect(()=>{
      axios.get('https://66501dccec9b4a4a6030c5a8.mockapi.io/formdata')
      .then(res => {
          console.log(res.data); 
          setOutput(res.data);  
        })
    },[])

   output.filter((data , index)=>{
    if(email == data.email){
      Nav1('/Signup')
    }
   })



  return (
<div className='home'>

        <div className="header-content">
        <Nav/>
        <div className='header1'>

        <div className='header2'>
                <h1>Unlimited movies, TV shows and more</h1>
               <h3>Watch anywhere. Cancel anytime.</h3>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>

                <form className="email" onSubmit={handelSubmit}>
                 <input type="email"  name='email'    placeholder="Email address...."   value={email} onChange={(e) => setEmail(e.target.value)}/>                
                 <button type='submit'>Get Started</button>
                 </form>
                 
                </div>

                
              </div>
             </div>
             <Section1/>
             <Section2/>
             <Section3/>
             <Section4/>
             <Footer/>
            </div>


  )
}
