import React from 'react'
import Header from './components/Header'
import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Series from './components/Series'
import Movies from './components/Movies'


function App() {
  return ( 
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/series" element={<Series />} /> 
        <Route path="/movies" element={<Movies />} /> 
        <Route path="*" element={<Home />} /> 
     </Routes>   
    )
}

export default App