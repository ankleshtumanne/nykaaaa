import React from 'react'
// import MK1 from '../src/assets/MK1.webp'
// import MK2 from '../src/assets/MK2.webp'

import An1 from '../src/assets/An1.avif'
import An2 from '../src/assets/An2.avif'
import An3 from '../src/assets/An3.avif'
import An4 from '../src/assets/An4.avif'
import { Link } from 'react-router-dom'
import { MdCurrencyRupee } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { BiSolidSkipNextCircle } from "react-icons/bi";
import { BiSolidSkipPreviousCircle } from "react-icons/bi";



function Card({image,name,callername,shades,amount}){
    return(
        <>
        <div className='card_div'>
                <div><img src={image} alt="" /></div>
                <div>
                <p>{name}</p>
                <p>{callername}</p>
                <Link>{shades}</Link>
                </div>
                <div className='card_content'>
                <MdCurrencyRupee size={25} />
                <Link>{amount}</Link>
                </div>
                <div>
                <Link><FaRegHeart size={30} /></Link>
                <button>SELECT SHADE</button>
                </div>  
        </div>
        </>
    )
}
function Part3Reuse() {
  
  return (
    <div id='main_part3'>
        <div><h1> ==== Body Cure ====</h1></div>
        
        <div id='card_div'>
        <button className=" " style={{color:'white'}}>
        <BiSolidSkipPreviousCircle size={30} />
        </button>
       
        <Card image={An1} name="Saver Gel" callername="Body cure" shades="18 shades" amount="799"/>,
        <Card image={An2} name="All You Need face clener " callername="Beauty" shades="NA" amount="1599"/>,
        <Card image={An3} name="winter body cure kit" callername="vasline kit" shades="NA" amount="1699"/>,
        <Card image={An4} name="The Skin Cre gel " callername="Fiama" shades="11 shades" amount="999"/> 
        <button  style={{color:'white'}}>
        <BiSolidSkipNextCircle size={30} />
        </button>
        </div>
       

    </div>
  )
}

export default Part3Reuse