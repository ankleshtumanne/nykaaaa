import React from 'react'
import men1 from '../src/assets/men1.avif'
import men2 from '../src/assets/men2.avif'
import men3 from '../src/assets/men3.avif'
import men4 from '../src/assets/men4.avif'
// import M2 from '../src/assets/M2.webp'
// import M3 from '../src/assets/M3.webp'
// import M4 from '../src/assets/M4.webp'
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
function Part3Reuse2() {
  
  return (
    <div id='main_part3' className='Reuse2'>
        <div><h1>--- BUDGET BUY ----</h1></div>
        
        <div id='card_div'>
        <button className=" " style={{color:'white'}}>
        <BiSolidSkipPreviousCircle size={30} />
        </button>
       
        <Card image={men1} name="Rage For Coverage " callername="Shampoo" shades="9 shades" amount="425"/>,
        <Card image={men2} name="Air Kiss Cream" callername="Creame" shades="4 shades" amount="250"/>,
        <Card image={men3} name="Eye Talk Value Set" callername="Eye talk" shades="NA" amount="599"/>,
        <Card image={men4} name="Beard oil " callername="For Growing Beard" shades="NA" amount="499"/> 
        <button  style={{color:'white'}}>
        <BiSolidSkipNextCircle size={30} />
        </button>
        </div>
       

    </div>
  )
}

export default Part3Reuse2