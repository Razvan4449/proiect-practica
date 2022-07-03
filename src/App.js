import React from 'react'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Series from './components/Series'
import Movies from './components/Movies'


function App() {
  return (
    <BrowserRouter>
     <Header />
      <Routes>
        <Route path="/proiect-practica" element={<Home />} /> 
        <Route path="/proiect-practica/series" element={<Series />} /> 
        <Route path="/proiect-practica/movies" element={<Movies />} /> 
        <Route path="*" element={<Home />} /> 
     </Routes>   
   </BrowserRouter>
    )
}

export default App