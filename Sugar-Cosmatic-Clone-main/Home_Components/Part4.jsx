import React from 'react'
import './Part4.css'
import { Link } from 'react-router-dom'

function Part4({h1Name,image,W,}) {
  return (
    <div className='part4_main_div'>
        <div><h1>{h1Name}</h1></div>
        <div className='banner' style={W}>
            <img src={image} alt="" />
            
        </div>
        
        
        
        
</div>
  )
}

export default Part4