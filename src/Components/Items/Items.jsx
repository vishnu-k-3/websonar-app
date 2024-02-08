import React from 'react'
import './items.css'

const items = (props) => {
  return (
    <div className='item'>
      <img src={props.image} alt="image" />
      <h1>{props.title}</h1>
      <div className="description">
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default items
