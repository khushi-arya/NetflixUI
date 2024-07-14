import React, { useEffect, useState } from "react";
import logo from "../../images/logo.png";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";



const Signup = () => {
    const [output , setOutput] = useState([]);
    const [email , seteml] = useState('');
    const [ password , setpassword] = useState('');
    
    let Navi = useNavigate();
    // let opertation = ()=>{
    //     Navi('/Home1');
    // }

   
    
      

     useEffect(
        ()=>{
            axios.get('https://66501dccec9b4a4a6030c5a8.mockapi.io/formdata')
            .then(res => {
                console.log(res.data); 
                setOutput(res.data);  
              })
       } ,[]
     )
     // console.log(output);  
       
    const ele = document.getElementById("pass")
    console.log(ele);
    
      function hadleValidation(){
     output.filter((data , index)=>{
        if(email == data.email && password == data.password){
            console.log("hello");
            Navi('/Home1');
        }else{
            ele.style.display = 'block';
        }
     })
    }

    
   
    return (
        <div className='form'>
            <img src={logo} alt='' className="logo"/>
        <div className='container'>
            <form className="box"  onSubmit={hadleValidation}>        
                <h1>Sign In</h1>
                <input type="email" placeholder="Useremail"  className="sinup" onChange={(e) => seteml(e.target.value)}    />
                <p  id="pass">Incorrect Password</p>
                <input type="password" placeholder="Password" className="sinup" onChange={(e)=> setpassword(e.target.value)}/>
                <button className="mybtn"  type="submit">Sign in</button>
               
            </form>
            
        </div>
        
        </div>
    );
};

export default Signup;