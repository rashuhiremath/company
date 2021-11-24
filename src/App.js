
import './App.css';
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import CompanyDetails from "./components/CompanyDetails.jsx"
import SearchEngine from './components/SearchEngine.jsx';
import Favourites from "./components/Favourites.jsx"


const  App =()=>
  { 
    
    
    return(<BrowserRouter>

 
    <Routes>
          <Route path="/" element={<SearchEngine />} />
            <Route path="/:company" element={<CompanyDetails />} />
            <Route path="/favourites" element={<Favourites />} />
          
        </Routes>
    
    </BrowserRouter>)}
  
 

export default App;
