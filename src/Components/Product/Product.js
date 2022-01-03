import React from 'react'
import './Product.css'
import category2 from '../../Images/category-2.jpg'

function Product() {
    return (
        <div className = "col-4">
            <img src={category2}/>
            <h4>Red Printed T-Shirt</h4>
            <div className = "rating"> 
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-o"></i>
            </div>
            <p>$50.00</p>
        </div>
    )
}

export default Product
