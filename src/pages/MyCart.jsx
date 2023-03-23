
import Footer from "../components/component-recycle/Footer";
import Header from "../components/component-recycle/Header";
import { Link, Outlet } from "react-router-dom"
import "./MyCart.scss"

import React, { useEffect, useState } from "react";
/* import "antd/dist/antd.css"; */
import { Checkbox, List } from "antd";


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