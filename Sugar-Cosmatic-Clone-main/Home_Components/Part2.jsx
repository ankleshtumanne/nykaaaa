import v_club from '../src/assets/v_club.jpg'
import {Link} from 'react-router-dom'
import nyka from '../src/assets/nyka.jpg'
export default function Part2(){
    return(
<div id="main">
    <div><h1>---- EXPLORE OUR TOP BRANDS ----</h1></div>
    <div className='black_div'>
        <div><img style={{width:"7rem",height:"7rem",borderRadius:"50%"}} src={nyka}/></div>
        <div><Link><h1>SELF CARE PICS</h1></Link>
        <Link><h1>Save Up To 40% EXTRA + FREE Shipping</h1></Link>
        <Link>JOIN NOW</Link>
        </div>
    </div>
    

</div>
    )
   
  }