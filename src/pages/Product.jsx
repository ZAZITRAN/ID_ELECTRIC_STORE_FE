import React from 'react'
import  {useParams} from "react-router-dom"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Product.scss"
import { Button, ConfigProvider, Form, Input, Rate } from "antd";
import Sider from 'antd/es/layout/Sider';
import { Footer, Header } from 'antd/es/layout/layout';



function Product() {
    const data=[ 
        "https://res.cloudinary.com/dhknvtaq2/image/upload/c_fill,h_500,w_800/v1676284203/cld-sample-5.jpg",
        "https://res.cloudinary.com/dhknvtaq2/image/upload/c_fill,h_500,w_800/v1676284203/cld-sample-3.jpg",
        "https://res.cloudinary.com/dhknvtaq2/image/upload/c_fill,h_500,w_800/v1676284203/cld-sample-2.jpg"
    ]
    let id=useParams()
    return ( <>
            <Header/>
        <div className="detail">
            <div className="slide">
            <Slider 
            
            dots
            initialSlide={2}
            infinite
            customPaging={(i)=>{
                return (
                    <div >
                        <img src={data[i]} alt="" />
                    </div>
                )
            }}
            dotsClass="slick-dot custom-indicator"
            >
                {data.map((item,i)=>{
                    return(
                        <div className='big' key={i}>
                            <img src={item} alt="" style={{ width :"100%"}}/>
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
                    <p className='name'>Wireless Microphone</p>
                    <div className="price-sale">
                        <div className="price">
                            <p>$29.99</p>
                        </div>
                        <div className='old-price'>
                            <p>$99.99</p>
                        </div>
                        <div className="sale">
                            <p> Save 50%</p>
                        </div>
                    </div>
                    <div className="delivery">
                        <img className='deli' src="/Product/01.png" alt="" />
                        <img className='voucher' src="/Product/02.png" alt="" />
                        <img className='stock' src="/Product/03.png" alt="" />                       
                    </div>
                    <div className="descrip">
                            <p>Desciption</p>
                            <span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium assumenda esse dicta, maiores porro consequuntur. Ullam voluptatem molestias pariatur, nam exercitationem, commodi odio animi, eum amet officia tenetur cum magni!
                            </span>
                    </div>
                    <form className="quantity-button">
                        <div className="quantity">
                            <p>Quantity</p>
                            <div className="in-de">
                                <button className="img">
                                    <img src="/Product/decrease.png" alt="" /><br />
                                </button>
                                <input type="number"/> <br />
                                <button className="img">
                                    <img src="/Product/increase.png" alt="" />
                                </button>
                            </div>
                        </div>
                        <div className="button">
                            <button className='chat'> Chat</button>
                            <button  className='add-cart' type="submit"> Add to Cart</button>
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
                        <Rate allowHalf defaultValue={2.5}/>
                    </Form.Item>    
                    <Form.Item >
                        <Button type='primary' htmlType='submit' > Submit</Button>
                    </Form.Item>                
                </Form>
                </ConfigProvider>
            </div>
        </div>
        
        <Footer/>
    </> );
}

export default Product;