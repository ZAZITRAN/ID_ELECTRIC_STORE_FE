import { useSelector, useDispatch } from 'react-redux';

import Footer from "../components/component-recycle/Footer";
import Header from "../components/component-recycle/Header";
import { Link, Outlet } from "react-router-dom"
import "./MyCart.scss"
import Checkbox from "../components/MyCart-component/mycartCheckbox";

import React, { useEffect, useState } from "react";
import { List, ConfigProvider } from "antd";
import axios from "axios"






function MyCart() {
    const [isCheckAll, setIsCheckAll] = useState(false);

    let cart = useSelector((state) => state.cart)

    let dispatch = useDispatch()


    useEffect(() => {
        axios.get("http://localhost:8080/cart")
            .then(res => {
                dispatch({ type: "save-cart", payload: res.data })
                console.log(res.data);
            })
            .catch((err) => console.log(err));

    }, []);
    /*  let  findIndex = cart.findIndex((e, i) => e.isChecker === false)
     if(findIndex===-1){
         setIsCheckAll(true)
     } */
    const handleSelectAll = e => {
        if (isCheckAll === true) {
            setIsCheckAll(false)
            dispatch({ type: "remove-all" })

        } else {
            setIsCheckAll(true)
            dispatch({ type: "check-all" })
        }
        /*  setIsCheckAll(!isCheckAll);
         setIsCheck(cart.map(li => li.id));
         if (isCheckAll) {
             setIsCheck([]);
         } */

    };

    const handleClick = (item) => {
        console.log(item);
        if (item.isChecker === true) {
            dispatch({ type: "remove-checker", payload: item })
        } else {
            dispatch({ type: "checker", payload: item })
        }
        /*  const { id, checked } = e.target; */
        /* setIsCheck([...isCheck, id]);
        if (!checked) {
            setIsCheck(isCheck.filter(item => item !== id));
        } */
    };
    const increase = (item) => {
        dispatch(
            {
                type: "increase",
                payload: item
            }
        )
    }
    const decrease = (item) => {
        dispatch(
            {
                type: "decrease",
                payload: item

            }
        )
    }
    const remove = (id) => {
        dispatch({
            type: "remove-from-cart",
            payload: id
        })
    }

    let totalPrice = 0
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].isChecker === true) {
            totalPrice += cart[i].number * cart[i].price
        }

    }
    console.log(totalPrice)

    return (

        <>
            <Header />
            <div className="cart">
                <div className="cart-title">
                    <p> My Cart</p>
                    <div className="link-convert">
                        <Link to="/mycart" className="link-to-cart">
                            <img className="cart-link" src="./MyCart/01.png" alt="aaa" />
                        </Link>
                        <img src="./MyCart/Line.png" alt="aa" />
                        <Link to="./checkout" className="link-to-checkout">
                            <img src="./MyCart/02.png" alt="aa" />
                        </Link>
                    </div>
                </div>
                <div className="cart-info">
                    <div className="cart-list">
                        <ConfigProvider
                            theme={{
                                token: {
                                    colorPrimary: '#ff2c18',
                                },
                            }}
                        >
                            <div className="select-all">
                                <Checkbox
                                    type="checkbox"
                                    name="selectAll"
                                    id="selectAll"
                                    handleClick={handleSelectAll}
                                    isChecked={isCheckAll}
                                />
                                <p>Select All</p>
                            </div>


                            <List
                                itemLayout="vertical"
                                size="large"
                                pagination={{
                                    onChange: (page) => {
                                        console.log(page);
                                    },
                                    pageSize: 3,
                                }}
                                dataSource={cart}

                                renderItem={(item, index) => (
                                    <List.Item  >
                                        <div className="product-cart">
                                            <Checkbox
                                                key={item.id}
                                                type="checkbox"
                                                name={item.name}
                                                id={item.id}
                                                handleClick={() => handleClick(item)}
                                                isChecked={item.isChecker}

                                            />
                                            <div className="product-info">
                                                <div className="img-product">

                                                </div>
                                                <div className="right-list">
                                                    <div className="bill-product">
                                                        <p className="name">{item.name}</p>
                                                        <p className="price">${item.price}</p>
                                                        <div className="quantity">
                                                            <button onClick={() => increase(item)} disabled={item.number === 0 ? true : false} className="img">
                                                                <img src="./MyCart/decrease.png" alt="" />
                                                            </button>

                                                            <p>{item.number}</p>
                                                            <button onClick={() => decrease(item)} className="img">
                                                                <img src="./MyCart/increase.png" alt="" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div onClick={() => { remove(item.id) }} className="remove">
                                                        <img src="./MyCart/remove.png" alt="" />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </List.Item>
                                )}
                            />
                        </ConfigProvider>

                    </div>
                    <div className="pay-box">
                        <div className="coupon">
                            <img className="icon" src="./MyCart/icon.png" alt="" />
                            <p> Have a coupon code? </p>
                            <img className="drop" src="./MyCart/down.png" alt="" />
                        </div>
                        <div className="summary-box">
                            <p className="summary">Summary</p>
                            <div className="total-box">
                                <p className="text">Total</p>
                                <p className='price'> {totalPrice}</p>
                            </div>
                            <button>Checkout</button>
                            <p className="continue">Continue Shopping</p>
                        </div>
                    </div>
                    <div className='pay-box-media'>
                        <div className="pay-top">
                            <div className="coupon">
                                <img className="icon" src="./MyCart/icon.png" alt="" />
                                <p> Have a coupon code? </p>
                                <img className="drop" src="./MyCart/down.png" alt="" />
                            </div>

                        </div>
                        <div className="pay-center">
                            <div className='summary-box'>
                                <p className="summary">Summary</p>
                                <div className="total-box">
                                    <p className="text">Total</p>
                                    <p className='price'> {totalPrice}</p>
                                </div>
                            </div>

                            <div className='pay-button'>
                                <button>Checkout</button>
                                <p className="continue">Continue Shopping</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
            <Outlet />
        </>);
}

export default MyCart;