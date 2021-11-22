
import './App.css';
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
//import SearchEngine from './components/SearchEngine.jsx';
import SerachJobs from './components/SearchJobs.jsx';


const  App =()=>
  { 
    const [jobs, setJobs] = useState([]);
    
    return(<BrowserRouter>

 
    <Routes>
          <Route path="/" element={<SerachJobs />} />
             
          
        </Routes>
    
    </BrowserRouter>)}
  
 

export default App;
