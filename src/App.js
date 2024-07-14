import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../../05project/src/components/Home/Home';
 import Signup from "./components/Signup/Signup";
import Home1 from "./components/Home1/Home1";
import Acc1 from "./components/Account/Acc1/Acc1";
import Acc2 from "./components/Account/Acc2/Acc2";
import Player from "./components/Player/Player";
import Search from "./components/Searchbar/Searchbar";

function App() {
  
  return (
    <div>    
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/Home1" element={<Home1/>}/>
        <Route path='Signup' element={<Signup/>}/>
       <Route path="Acc1" element={<Acc1/>}/> 
       <Route path="Acc2" element={<Acc2/>}/>
       <Route path="/player/:id" element={<Player/>}/>
       <Route path="/seacrchbar" element={<Search/>}/>
        </Routes>
       </BrowserRouter>

       
    </div>
    
  );
}

export default App;
