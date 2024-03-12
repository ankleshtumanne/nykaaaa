import React from 'react'
import './Header.css'
import { SearchIcon} from '@chakra-ui/icons'
import {Link} from 'react-router-dom'
import { RiAccountCircleLine } from "react-icons/ri";
import { IoIosHeartEmpty } from "react-icons/io";
import { LuShoppingBag } from "react-icons/lu";
import { TbDiscount2 } from "react-icons/tb";
import Hover from '../../Home_Components/Hover';
import nyka from '../assets/nyka.jpg'
import Cart from './Cart';
function Header() {
  return (
    <>
<div id='main_container'>
    <div className='image_div'>
        <div>
        <Link to="/">
        <img src={nyka} alt="" />
        </Link>
       
        </div>
        <Link to="https://in.sugarcosmetics.com/clubVellvette">JOIN US</Link>
    </div>
   
    <div id='inputbox'>
    <input  type="text" placeholder=' "Search Anything what you want " '/><button style={{border:'1px solid white'}}><SearchIcon/>Search</button>
    </div>
   

    <div id='child3'>
      
    <RiAccountCircleLine size={25}/><Link to="/login"><span>Login/Register</span></Link>
    </div>
    

    <div id='child4'>
    <Link><IoIosHeartEmpty size={25} /></Link>
    <Link to="/Cart"><LuShoppingBag size={25} /></Link>
    <Link><TbDiscount2 size={25} /></Link>
    </div>  
</div>
<div id='main_container2'>
      <div className='AllLink'>
        <Hover name={'Mackup'}/>
        
        <Link>SKIN</Link>
        <Link>HAIR</Link>
        <Link>NAILS</Link>
        <Link>BOTH AND BODY</Link>
        <Link>NATURAL</Link>
        <Link>GIFTS & KITS</Link>
        <Link>BESTSELLERS</Link>
        <Link>FRAGRENCE</Link>
        <Link>OFFERS</Link>
        <Link>MEN</Link>
      </div>

</div>
    </>
    
  )
}

export default Header