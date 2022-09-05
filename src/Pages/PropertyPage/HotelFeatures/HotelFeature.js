import React from 'react'
import './HotelFeature.css'


const HotelFeature = ({Icon, title, desc}) => {
  return (
    <div className="hotel-feature-wrapper">
          <div className="feature-icon">
           {Icon && <Icon/>}
          </div>
          <div className="feature-text">
            <h1>{title}</h1>
            <p>{desc}</p>
          </div>

         
        </div>
  )
}

export default HotelFeature