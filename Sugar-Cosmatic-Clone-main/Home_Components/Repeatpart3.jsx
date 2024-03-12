import React from 'react'
import RepeatP3 from '../src/assets/RepeatP3.webp'
import RepeatP32 from '../src/assets/RepeatP32.webp'
import RepeatP33 from '../src/assets/RepeatP33.webp'
import RepeatP34 from '../src/assets/RepeatP34.webp'
import card3 from '../src/assets/card3.webp'
import card4 from '../src/assets/card4.webp'
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
                <button>CHOOSE ITEMS</button>
                </div>  
        </div>
        </>
    )
}
function Repeatpart3() {
  
  return (
    <div id='main_part3'>
        <div><h1>--- BESTSELLERS ----</h1></div>
        
        <div id='card_div'>
        <button className=" " style={{color:'white'}}>
        <BiSolidSkipPreviousCircle size={30} />
        </button>
       
        <Card image={RepeatP3} name="Love Locked Makeup Kit" callername="eyelinear" shades={'14 shades'} amount="1499"/>,
        <Card image={RepeatP32} name="X-mas Glow Makeup Kit" callername="Lipstick" shades="14 shades" amount="1599"/>,
        <Card image={RepeatP33} name="Sibling Love Limited Edition" callername="Gift Kit" shades="11 shades" amount="1599"/>,
        <Card image={RepeatP34} name="Fiesty Firecracker kit " callername="Face Palette" shades="18 shades" amount="999"/> 
        <button  style={{color:'white'}}>
        <BiSolidSkipNextCircle size={30} />
        </button>
        </div>
       

    </div>
  )
}

export default Repeatpart3