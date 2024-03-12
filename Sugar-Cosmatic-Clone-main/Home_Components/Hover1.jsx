import React from 'react'

const Hover1 = () => {
    return (
        <div className="dropdown">
          <Link to="/product">{name}</Link>
          {/* <Link to="/product">{name}</Link> */}
          <div className="dropdown-content">
            <div>
                <Link>Mackup Kit</Link>
                {/* <Link></Link> */}

                <ul>
                    <li><Link>Face Primer</Link></li>
                    <li><Link>Cleaver</Link></li>
                    <li><Link>Foundation</Link></li>
                    <li><Link>Hair Oil </Link></li>
                    <li><Link>Sherom</Link></li>
                    <li><Link>Hair Draiyer</Link></li>
                    <li><Link>Beard Oil</Link></li>
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

export default Hover1
