import React, { Component } from 'react'
import './Header.css'
import '../Product/Product.css'
import '../../Images/font-awesome-4.7.0/css/font-awesome.min.css'
import logo from '../../Images/Logo.png'
import phones from '../../Images/ios.png'
import wallPic from '../../Images/Homepage.png'
import cart from '../../Images/Cart.png'
import menu from '../../Images/menu.png'
import category1 from '../../Images/category-1.jpg'
import category2 from '../../Images/category-2.jpg'
import category3 from '../../Images/category-3.jpeg'
import backpack from '../../Images/Back-pack.png'
import Product from '../Product/Product'
import Review from '../Review/Review'
import Brands from '../Brands/Brands'

class Header extends Component{

    render(){
        return (
            <div>
                <div className="headers">
                    <div className = "container">
                        <div className="header">
                            <div className = "logo">
                                <img src={logo} width={"200px"}/>
                            </div>
                            <nav>
                                <ul ref = {this.MenuItems}>
                                    <li>
                                    <a href="">Home</a>
                                    </li>
                                    <li>
                                    <a href="">Products</a>
                                    </li>
                                    <li>
                                    <a href="">About</a>
                                    </li>
                                    <li>
                                    <a href="">Contact</a>
                                    </li>
                                    <li>
                                    <a href="">Account</a>
                                    </li>
                                </ul>
                            </nav>
                            <img src = {cart} width = {"36px"} height={"36px"}/>
                            <img src = {menu} width = {"36px"} height={"36px"} className = "menu-icon"/>
                        </div>
                        <div className = "row">
                            <div class = "col-2">
                                <h1>Give your Workout <br/>a New Style</h1>
                                <p>Hellooooooo</p>
                                <a className = "btn" href="">Explore Now &#8594;</a>
                            </div>
                            <div class = "col-2">
                                <img src = {wallPic}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "categories">
                    <div className="small-container">
                        <div className="row">
                            <div className="col-3">
                                <img src={category1}/>
                            </div>
                            <div className="col-3">
                                <img src={category2}/>
                            </div>
                            <div className="col-3">
                                <img src={category3}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "small-container">
                    <h2 className = "title">Featured Products</h2>
                    <div className = "row">
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                    </div>
                    <h2 className = "title">Latest Products</h2>
                    <div className = "row">
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                    </div>
                    <div className = "row">
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                    </div>
                </div>
                <div className = "offer">
                    <div className = "small-container">
                        <div className = "row">
                            <div className = "col-2">
                                <img className = "offer-img" src={backpack}/>
                            </div>
                            <div className = "col-2">
                                <p>Exclusively Available on T-Mania</p>
                                <h1>Tune Squad Backpack</h1>
                                <small>Prove your Loyalty to the King by purchasing this Space-Jam Inspired Back-pack<br/></small>
                                <a href="" class="btn">Buy Now &#8594;</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "testimonial">
                    <div className = "small-container">
                        <div className = "row">
                            <Review/>
                            <Review/>
                            <Review/>
                        </div>
                    </div>
                </div>
                <div className = "brands">
                    <div className = "small-container">
                        <div className = "row">
                            <Brands/>
                            <Brands/>
                            <Brands/>
                        </div>
                    </div>
                </div>
                <div className = "footer">
                    <div className = "container">
                        <div className = "row">
                            <div className = "footer-col-1">
                                <h3>Download Our App</h3>
                                <p>Download App For Android and IOS</p>
                                <div className = "app-logo">
                                    <img src = {phones}/>
                                </div>
                            </div>
                            <div className = "footer-col-2">
                                <img src = {logo}/>
                                <p>Our Purpose is to bring that youth and cheer from many years ago back into the lives of young adults through T-Shirts</p>
                            </div>
                            <div className = "footer-col-3">
                                <h3>Useful Links</h3>
                                <ul>
                                    <li>
                                        Coupons
                                    </li>
                                    <li>
                                        Blog Post
                                    </li>
                                    <li>
                                        Return Policy
                                    </li>
                                    <li>
                                        Join Affiliate
                                    </li>
                                </ul>
                            </div>
                            <div className = "footer-col-4">
                                <h3>Follow Us</h3>
                                <ul>
                                    <li>
                                        Facebook
                                    </li>
                                    <li>
                                        Twitter
                                    </li>
                                    <li>
                                        Instagram
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <hr/>
                        <p className = "copyright">Copyright 2022 - Ziad Malik</p>
                    </div>
                </div>
            </div>
        );
    }
}


export default Header
