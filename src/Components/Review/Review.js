import React from 'react'
import './Review.css'
import face from '../../Images/face1.png'

function Review() {
    return (
        <div className = "col-3">
            <i class="fa fa-quote-left"></i> 
            <p>Hello How are you this site is amazing</p>
            <div className = "rating"> 
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-o"></i>
            </div>
            <img src = {face}/>
            <h3>Ziad Malik</h3>
        </div>
    )
}

export default Review
