import React from 'react'
import './end.css'
import { Link } from 'react-router-dom'

const End = () => {
  return (
    <div className='end'>
      <div className="txt">
        <h2>Why Choose <span>WEBSONAR</span>?</h2>
        <p>"To extend firms’ development, design, and digital marketing skills, we deploy specialised teams."</p>
      </div>
      <div className="positives">
        <ul>
            <li><span>2013</span> Established</li>
            <li><span>110+</span> Number of Employees</li>
            <li><span>02</span> Development Office</li>
            <li><span>3000+</span> Clients Worldwide</li>
            <li><span>80+</span> Developers</li>
            <li><span>9+ </span>Years of Experience</li>
            <li><span>4.9</span> star Google Customer Rating</li>
            <li><span>07</span> Globally Offices</li>
        </ul>
      </div>
      <div className="btn">
        <Link to="/quote"><button>Quote →</button></Link>
      </div>
      <hr />
      <p></p>
    </div>
  )
}

export default End
