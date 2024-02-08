import React from 'react'
import './quoteSubmit.css'

const Qoute = () => {
  return (
    <div className='full-quote'>
      <div className="heading">
        <h1>Feel free to submit your details. Your details are 100% safe and confidential.</h1>
      </div>
      <div className="form">
        <form action="">
          <label htmlFor="name">Name: </label>
          <input type="text" id='name' name='name'/>
          <label htmlFor="phone">Phone No: </label>
          <input type="tel" id='phone' name='phone' maxLength={10} required />
          <label htmlFor="email">E-email:</label>
          <input type="email" id='email' name='email' required/>
          <p>Services:</p>
          <input type="checkbox" id='service' name='service' required/>
          <label className='ser' htmlFor="service">Hire a resource / team on Remote</label>
          <input type="checkbox" id='service' name='service' required/>
          <label className='ser' htmlFor="service">Web Design & Development</label>
          <input type="checkbox" id='service' name='service' required/>
          <label className='ser' htmlFor="service">Mobile Application Development</label>
          <input type="checkbox" id='service' name='service' required/>
          <label className='ser' htmlFor="service">Annual Maintenance - AMC</label>
          <input type="checkbox" id='service' name='service' required/>
          <label className='ser' htmlFor="service">Digital Marketing</label>
          <input type="checkbox" id='service' name='service' required/>
          <label className='ser' htmlFor="service">Ecommerce Solutions</label>
          <input type="checkbox" id='service' name='service' required/>
          <label className='ser' htmlFor="service">SEO (Search Engine Optimisation)</label>
          <input type="checkbox" id='service' name='service' required/>
          <label className='ser' htmlFor="service">Software Development</label>
          <input type="checkbox" id='service' name='service' required/>
          <label className='ser' htmlFor="service">Other</label>
          <label for="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Qoute
