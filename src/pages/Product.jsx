import React, { useEffect, useState, useRef } from 'react'
import { useParams } from "react-router-dom"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Product.scss"
import {Modal, Button, ConfigProvider, Form, Input, List, Rate } from "antd";

import Footer from '../components/component-recycle/Footer';
import Header from '../components/component-recycle/Header';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const Price = ({products, findIndex}) => {
    if (products[findIndex]?.discount === 0) {
        return (
            <div className="price-sale">
                <div className="price">
                    <p>${products[findIndex]?.exportPrice}</p>

                </div>

            </div>
        )
    } else {
        return (
            <div className="price-sale">
                <div className="price">
                    <p>${products[findIndex]?.exportPrice * (100 - products[findIndex]?.discount) / 100}</p>
                </div>
                <div className='old-price'>

                    <p>${products[findIndex]?.exportPrice}</p>
                </div>
                <div className="sale" >
                    <p> Sale:{products[findIndex]?.discount}%</p>
                </div>
            </div>
        )

    }
}



function Product() {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [title,setTitle]=useState("")
    const [title2,setTitle2]=useState("")

    
    const handleOk = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setOpen(false);
      }, 3000);
    };
    const handleCancel = () => {
      setOpen(false);
     
    };
    


    const inputRef = useRef(null);
    const [value, setValue] = useState(1)
    
    let dispatch = useDispatch()

    useEffect(() => {
        axios.get("http://localhost:8080/product")
            .then(res => {
                console.log(res.data)
                dispatch({ type: "save-products", payload: res.data })
            })
            .catch((err) => {
                console.log(err);
            })
        axios.get("http://localhost:8080/cart")
            .then(res=>{
                console.log("cart",res)
                dispatch({ type: "save-cart", payload: res.data })
            });
          
    }, [])
    let products = useSelector((state) => state.products)
    let cart=useSelector((state) => state.cart)
    let { id } = useParams()

    console.log("product-->", products);
    let findIndex = products?.findIndex((item, i) => item.id === +id)
    console.log("find", findIndex);

    const listImg = []
    listImg.push(products[findIndex]?.productImg1)
    listImg.push(products[findIndex]?.productImg2)
    listImg.push(products[findIndex]?.productImg3)
    
    
    const decrease = (e) => {
        e.preventDefault();
        setValue(value - 1)
        console.log(11111);


    }
    const increase = (e) => {
        e.preventDefault();
        setValue(value + 1)

        console.log(11111);
    }
    const Submit = (e) => {
        e.preventDefault()
       
        
        let findIndexCart=cart?.findIndex((item,i)=>item.id===Number(id))
        console.log(cart);
        console.log(findIndexCart);
        if(findIndexCart===-1){
            dispatch({
                type: "add-new-to-cart-from-detail",
                payload: {
                    id: +id,
                    quantity: Number(inputRef.current.value),
                    name: products[findIndex]?.name,
                    exportPrice: products[findIndex]?.exportPrice,
                    isChecker: true
                }
            })
            axios.post( "http://localhost:8080/cart",
            {   id: +id,
                quantity: Number(inputRef.current.value),
                name: products[findIndex]?.name,
                exportPrice: products[findIndex]?.exportPrice*(100-products[findIndex].discount)/100,
                isChecker:true
            }
            )

                .then(res => {
                    console.log(res);
                    setOpen(true)
                    setTitle("Success!!")
                    setTitle2("Please Click On Directional Buttons")
                  
                })
                .catch(err=>{
                    console.log(err);
                    setOpen(true)
                    setTitle("System Error!!")
                    setTitle2("Please try again!!!")
                 } )


        }else{
            
                axios.put( `http://localhost:8080/cart/${cart[findIndexCart].id}`,
                {   id: +id,
                    quantity: Number(inputRef.current.value)+cart[findIndexCart].quantity,
                    name: products[findIndex]?.name,
                    exportPrice: products[findIndex]?.exportPrice*(100-products[findIndex].discount)/100,
                    isChecker:true
                }
                )
                    .then(res => {
                        console.log(res);
                        setOpen(true)
                        setTitle("Success!!")
                        setTitle2("Please Click On Directional Buttons")
                       
                    })
                    .catch(err=>{
                        console.log(err);
                        setOpen(true)
                        setTitle("System Error!!")
                        setTitle2("Please try again!!!")
                     } )
                     dispatch({
                        type: "edit-to-cart-from-detail",
                        payload: {
                            id: +id,
                            quantity: Number(inputRef.current.value)
                        }
                        
                    })
        }

        }




    
   
    return (<>
        <Header />
       {cart.length}
        <div className="detail">
            <div className="slide">
                <Slider
                    dots
                    initialSlide={2}
                    infinite
                    customPaging={(i) => {
                        return (
                            <div >
                                <img src={listImg[i]} alt="" />
                            </div>
                        )
                    }}
                    dotsClass="slick-dot custom-indicator"
                >
                    {listImg.map((item, i) => {
                        return (
                            <div className='big' key={i}>
                                <img src={item} alt="" style={{ width: "100%" }} />
                            </div>
                        )
                    })}
                </Slider>

            </div>
            <div className="title">

                <div className="wishlist-review">
                    <div className="wishlist-review-left">
                        <p className="rate">5.0</p>
                        <p className="stars">⭐⭐⭐⭐⭐</p>
                        <p className="review"> Review (12)</p>
                        <p className="sold">Sold 99</p>
                    </div>
                    <div className="wishlist">
                        <img src="/Product/Love.png" alt="" />
                        <p>Add to Wishlist</p>
                    </div>
                </div>
                <div className="info">
                    <p className='name'>{products[findIndex]?.name}</p>
                                        <Price products={products} findIndex={findIndex}/>
                    <div className="delivery">
                        <img className='deli' src="/Product/01.png" alt="" />
                        <img className='voucher' src="/Product/02.png" alt="" />
                        <img className='stock' src="/Product/03.png" alt="" />
                    </div>
                    <div className="descrip">
                        <p>Desciption</p>
                        <span>
                            {products[findIndex]?.productDescriptions}
                        </span>
                    </div>
                    <form onSubmit={Submit} className="quantity-button">
                        <div className="quantity">
                            <p>Quantity</p>
                            <div className="in-de">
                                <button disabled={value === 0 ? true : false} onClick={decrease} className="img">
                                    <img src="/Product/decrease.png" alt="" /><br />
                                </button>
                                <input ref={inputRef} type="number" name="quantity" value={value} /> <br />
                                <button onClick={increase} className="img">
                                    <img src="/Product/increase.png" alt="" />
                                </button>
                            </div>
                        </div>
                        <div className="button">
                            <button className='chat'> Chat</button>
                            <button className='add-cart' type="submit"> Add to Cart</button>
                        </div>
                    </form>
                    <div className="wishlist-media">
                        <img src="/Product/Love.png" alt="" />
                        <p>Add to Wishlist</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="review-box">
            <div className="review">
                <p>Review</p>
                <div className="reivew-list"></div>
            </div>
            <div className="add-review">
                <div className="review-title">
                    <p>Add Review</p>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, vel? Aperiam reprehenderit quaerat rem ut maiores nam odio dignissimos harum itaque consequuntur, accusantium labore quibusdam! Animi sapiente officiis dolore adipisci.</span>
                </div>
                <ConfigProvider
                    theme={{
                        token: {
                            colorPrimary: '#ff2c18',
                        },
                    }}
                >
                    <Form
                        layout="vertical">
                        <Form.Item label="Name" name="name">
                            <Input placeholder="Name" />
                        </Form.Item>
                        <Form.Item label="Email" name="email">
                            <Input placeholder="Email" />
                        </Form.Item>
                        <Form.Item label="Review" name="reivew">
                            <Input placeholder="Review" />
                        </Form.Item>
                        <Form.Item label="Rate" name="rate">
                            <Rate allowHalf defaultValue={2.5} />
                        </Form.Item>
                        <Form.Item >
                            <Button type='primary' htmlType='submit' > Submit</Button>
                        </Form.Item>
                    </Form>
                </ConfigProvider>
            </div>
        </div>

        <Footer />
        
        <Modal
        closable={false}
        open={open}
        className="modal"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          
          <Button
            
            style={{display:{title:"System Error!!" ? "none" : "block" }}}
            key="link"
            href="/mycart"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Go To Cart
          </Button>,
        ]}
      >
       <h1>{title}</h1>
       <p>{title2}</p>
      </Modal>
    </>);
}

export default Product;