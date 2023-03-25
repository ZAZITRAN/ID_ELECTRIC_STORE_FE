
import { useSelector,useDispatch } from 'react-redux';
import Footer from "../components/component-recycle/Footer";
import Header from "../components/component-recycle/Header";
import { Link, Outlet } from "react-router-dom"
import "./MyCart.scss"

import React, { useEffect, useState } from "react";
/* import "antd/dist/antd.css"; */
import { Checkbox, List } from "antd";

let cart=useSelector((state)=>state.cart)
let disPatch=useDispatch()
useEffect(()=>{
    
    axios.get("http://localhost:3000/cart")
    .then( res=>{
        disPatch({type:"save-cart",payload:res.data})
    })
    .catch((err)=>console.log(err));
},[])

const increase=(item)=>{
        disPatch(
            {
                type:"increase",
                payload: item
            }
        )
}
const decrease=(item)=>{
    disPatch(
        {
            type:"decrease",
            payload: item
            
        }
    )
} 
const remove=(id)=>{
    disPatch({
        type:"remove-from-cart",
        payload:id
    })
}
function MyCart() {
    return (<>
        <Header />
        <div className="cart">
            <div className="cart-title">
                <p> My Cart</p>
                <div className="link-convert">
                    <Link to="/mycart" className="link-to-cart">
                        <p className="number"> 1</p>
                        <p className="page-name">MyCart</p>
                    </Link>
                    <img src="./MyCart/Line.png" alt="" />
                    <Link to="./checkout" className="link-to-checkout">
                        <p className="number"> 2</p>
                        <p className="page-name">Checkout</p>
                    </Link>
                </div>
            </div>
            <div className="cart-info">
                <div className="cart-list">
                    <div className="select-all">

                    </div>
                </div>
            </div>
        </div>

        <Footer />
        <Outlet/>
    </>);
}

export default MyCart;