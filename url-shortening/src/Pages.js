import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Section/Home';
import Pricing from './Section/Pricing';
import Features from './Section/Features';
import Resources from './Section/Resources';

const Pages = () => {
  return (
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/features' element={<Features/>} />
      <Route path='/pricing' element={<Pricing/>} />
      <Route path='/resources' element={<Resources/>} />
      </Routes>
  )
}

export default Pages;