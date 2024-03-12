import React from 'react'
import card1 from '../src/assets/card1.webp'
import card2 from '../src/assets/card2.webp'
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
                <button>SELECT SHADE</button>
                </div>  
        </div>
        </>
    )
}
function Part3() {
  
  return (
    <div id='main_part3'>
        <div><h1>--- BESTSELLERS ----</h1></div>
        
        <div id='card_div'>
        <button className=" " style={{color:'white'}}>
        <BiSolidSkipPreviousCircle size={30} />
        </button>
       
        <Card image={card1} name="Matte As Hell Crayon" callername="Lipstick" shades="18 shades" amount="807"/>,
        <Card image={card2} name="Matte Attack Transferproof" callername="Lipstick" shades="14 shades" amount="712"/>,
        <Card image={card3} name="Ace Of face Foundation" callername="Stick" shades="11 shades" amount="970"/>,
        <Card image={card4} name="Contour De Force Eyes " callername="Face Palette" shades="18 shades" amount="1099"/> 
        <button  style={{color:'white'}}>
        <BiSolidSkipNextCircle size={30} />
        </button>
        </div>
       

    </div>
  )
}

export default Part3