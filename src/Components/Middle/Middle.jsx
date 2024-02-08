import React from 'react'
import './middle.css'
import Items from '../Items/Items.jsx'
import service from '../Assets/services.js'

const Middle = () => {
  return (
    <div className='middle'>
      <div className="one">
        <h1>WebSenor is ranked #1 on Clutch
            and GoodFirms</h1>
        <p>We design and develop scalable, high-performing digital solutions to address the business concerns of our clients. Our services concentrate on Web application development, cloud computing, IoT, augmented reality and virtual reality, blockchain, artificial intelligence and machine learning, predictive analytics and big data solutions, as well as a number of other hot and upcoming technologies.</p>
      </div>
      <hr />
      <div className="service">
        <h1>Services</h1>
          {service.map((items,i) => {
            return <Items key={i} id={items.id} image={items.image} title={items.title} description={items.description}/>
          })}
      </div>
      <div className="btn">
        <button>VIEW ALL SERVICES</button>
      </div>
      <hr />
    </div>
  )
}

export default Middle
