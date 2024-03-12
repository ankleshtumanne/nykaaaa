import React from 'react'
import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import {Link} from 'react-router-dom'
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaSquarePinterest } from "react-icons/fa6";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { BiLogoPlayStore } from "react-icons/bi";
import { RiAppleLine } from "react-icons/ri";
import nyka from '../assets/nyka.jpg'
function Footer() {
  return (
    <>
    <div id='main_footer'>

      <h2>----  LET’S STAY IN TOUCH  ----</h2>
      <p>Get the latest beauty tips straight to your inbox. Can’t wait to connect!</p>
      <div>
      <input  type="text" placeholder='Enter Email '/><button style={{border:'1px solid white'}}>SUBSCRIBE</button>
      </div>
    </div>
    
    <div id='main_footer2'>
    <img src={nyka} alt="" />
    <div id='contact_logo'>
     <Link><FaFacebook /></Link>
     <Link><FaXTwitter /></Link>
     <Link><FiYoutube /></Link>
     <Link><FaInstagram /></Link>
     <Link><IoMailOpenOutline /></Link>
     <Link><FaSquarePinterest /></Link>
    </div>
    <hr />
    <div id='link_1'>
      <Link>Stores</Link>
      <Link>Elite</Link>
      <Link>Terms & Conditions</Link>
      <Link>Returns</Link>
      <Link>FAQs</Link>
      <Link>About Us</Link>
    </div>
    <hr />
    </div>
    <div id='table'>
    <h2>GET IN TOUCH</h2>
    <div id='flex'>
    <div className='col'>
      <h3>Call us at</h3>
      <Link><li>1800-209-9933</li></Link>
      
      <li>Monday to Friday: 09:00 AM - 09:00 PM</li>
      <li>Saturday: 09:00 AM - 07:00 PM</li>
      
    </div>
    <div className='col'>
      <h3>Support</h3>
      
        <Link><li>hello@sugarcosmetics.com</li></Link>
     
    </div>
    <div className='col'>
      <h3>Careers</h3>
     
       <Link><li>We're hiring!</li></Link> 
      
    </div>
    <div className='col'>
      <h3>Press & Media</h3>
      
        <Link><li>Wpr@sugarcosmetics.com</li></Link>
      
    </div>
    <div className='col'>
      <h3>Influencer Collab</h3>
     
        <Link><li>Join Us</li></Link>
     
    </div>
    </div>
    <hr />
    <div id='last'>
      <div>
      <h2>GET THE NEW SUGAR APP TODAY!</h2>
      <p>Tap into a better shopping experience.</p>
      </div>
      <div>
      <Button fontSize="sm"   borderColor="gray"
      borderWidth="1px" colorScheme='black' _hover={{ borderColor: "gray.400" }}
      _active={{ borderColor: "gray.600" }}><BiLogoPlayStore size={35} />Get it on <br />Google Play</Button>
      <Button fontSize="sm"   borderColor="gray"
      borderWidth="1px" colorScheme='black' _hover={{ borderColor: "gray.400" }}
      _active={{ borderColor: "gray.600" }}><RiAppleLine size={35} />Get it on <br /> App Store</Button>
      </div>
      
    </div>
    <hr />
    <div id='copyright'>
      <p>Copyright © 2023 SUGAR Cosmetics. All rights reserved.</p>
    </div>
    </div>
    
   
    </>
  )
}

export default Footer