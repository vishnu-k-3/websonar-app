import React from 'react'
import './head.css'
import { Link } from 'react-router-dom'

const Head = () => {
  return (
    <div className="header">
        <div className='head'>
      <p>Our Development
        and Digital Marketing Services</p>
        <h1>
            <ul>
                <li>Dedicated Teams.</li>
                <li>Enterprise Mobility.</li>
                <li>Product Engineering.</li>
                <li>Digital Transformation.</li>
                <li>Website Development.</li>
                <li>AI & ML Development.</li>
            </ul>
        </h1>
        <Link id='btn' to='/quote'><button>Quote  →</button></Link>
    </div>
    <hr />
    </div>
    
  )
}

export default Head
