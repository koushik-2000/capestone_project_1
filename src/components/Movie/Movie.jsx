import React from 'react'
import './Movie.css'
import round from '../../assets/rPro.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from "axios";

function Movie() {
  const navigate = useNavigate();

  const logo = ()=> {
    navigate('/Main')
  }
  return (
    <div className='main'> 
      <div className='topBox'>
        <h3 className='logo'>super app</h3>
        <p className='phrase'>Entertainment according to your choice</p>
        <img src={round} alt="userImage" className='ring' onClick={logo}/>
      </div>
      <div className="bottomBox">
        
      </div>
    </div>
  )
}

export default Movie
