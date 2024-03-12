import React from 'react'
import './Reuse3Card.css'
import hotdeal1 from '../src/assets/hotdeal1.gif' 
import hotdeal2 from '../src/assets/hotdeal2.webp'
import hotdeal3 from '../src/assets/hotdeal3.webp'
import { BiSolidSkipNextCircle } from "react-icons/bi";
import { BiSolidSkipPreviousCircle } from "react-icons/bi";

function Reuse3Card({name,image1,image2,image3}) {
  return (<>
    <div className='Reuse3Card'>
        <div><h1>{name}</h1></div>
   

    <div>
        <button className=" " style={{color:'black'}}>
        <BiSolidSkipPreviousCircle size={30} />
        </button>
        <div><img src={image1} alt="" /></div>
        <div><img src={image2} alt="" /></div>
        <div><img src={image3} alt="" /></div>
        <button  style={{color:'black'}}>
        <BiSolidSkipNextCircle size={30} />
        </button>
    </div>

    </div>

    </>
  )
}

export default Reuse3Card