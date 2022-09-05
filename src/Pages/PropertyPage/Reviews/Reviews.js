import React from 'react'
import './Reviews.css'
import StarIcon from '@mui/icons-material/Star';


const Reviews = () => {
    return (
        <div className='review-wrapper'>
            <div className="review-count">
            <span><StarIcon /> 4.81 . 188 Reviews</span>
            </div>

            <div className="review-progress">
               <div className="row">
                <div className="col-md-6">
                <div className="rev-left">
                <div className="rev-name">
                    <h1>Cleanliness</h1>
                </div>
                <div className="rev-meter ">
                <progress value="32" max="100"> </progress>                
                </div>
                </div>
                </div>
                <div className="col-md-6">
                <div className="rev-right">
                <div className="rev-name">
                    <h1>Cleanliness</h1>
                </div>
                <div className="rev-meter ">
                <progress value="32" max="100"> </progress>                
                </div>
                </div>
                </div>
               </div>
                
            </div>
        </div>
    )
}

export default Reviews