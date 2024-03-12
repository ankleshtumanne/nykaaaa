import React from 'react'
import './Hover.css'
import { Link } from 'react-router-dom'
function Hover({name}) {
  return (
<div className="dropdown">
  <Link to="/product">{name}</Link>
  {/* <Link to="/product">{name}</Link> */}
  <div className="dropdown-content">
    <div>
        <Link>Mackup Kit</Link>
        {/* <Link></Link> */}
        <ul>
            <li><Link>TRANSFER PROOF LIPSTICKS</Link></li>
            <li><Link>MATTE LIPSTICKS</Link></li>
            <li><Link>CLEVER</Link></li>
            <li><Link>CRAYON SHEROM</Link></li>
            <li><Link>POWDER </Link></li>
            <li><Link>SATIN SHAMPOO</Link></li>
            <li><Link>HIR DRAIYER</Link></li>
            <li><Link>LIP GLOSS & LINERS</Link></li>
        </ul>
    </div>
    <div>
        <Link>LIP CARE</Link>
        <ul>
            <li><Link>LIPSTICK FIXER & REMOVERS</Link></li>
            <li><Link>LIP PRIMERS & SCRUBS </Link></li>
            <li><Link>LIP BALMS </Link></li>
        </ul>
    </div>
  </div>
</div>
  )
}

export default Hover