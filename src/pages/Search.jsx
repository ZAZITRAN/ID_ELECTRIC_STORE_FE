import Footer from "../components/component-recycle/Footer";
import Header from "../components/component-recycle/Header";
import { Input, List, Menu, Form, Checkbox, Button, ConfigProvider, Slider } from "antd"
import { useState, useEffect } from "react";
import { DownOutlined } from "@ant-design/icons"
import "./Search.scss"

function Search() {
    const data = [
        {
            id: 1,
            img: "https://res.cloudinary.com/dhknvtaq2/image/upload/c_fill,h_243,w_376/v1679235190/ojt/ku1rphznnmm27cjuldzj.png",
            name: "macbook",
            stars: 5.0,
            review: 7,
            sold: 99,
            price: 39.99,
            salePrice: 29.99,
            address:"Palembang"
        },
        {
            id: 2,
            img: "https://res.cloudinary.com/dhknvtaq2/image/upload/c_fill,h_243,w_376/v1679235190/ojt/ku1rphznnmm27cjuldzj.png",
            name: "macbook",
            stars: 5.0,
            review: 7,
            sold: 99,
            price: 39.99,
            salePrice: 29.99,
            address:"Jakarta"
        },
        {
            id: 3,
            img: "https://res.cloudinary.com/dhknvtaq2/image/upload/c_fill,h_243,w_376/v1679235190/ojt/ku1rphznnmm27cjuldzj.png",
            name: "macbook",
            stars: 5.0,
            review: 7,
            sold: 99,
            price: 39.99,
            salePrice: 29.99,
            address:"Palembang"
        },
        {
            id: 3,
            img: "https://res.cloudinary.com/dhknvtaq2/image/upload/c_fill,h_243,w_376/v1679235190/ojt/ku1rphznnmm27cjuldzj.png",
            name: "macbook",
            stars: 5.0,
            review: 7,
            sold: 99,
            price: 39.99,
            salePrice: 29.99,
            address:"Sumatra"
        },
        {
            id: 4,
            img: "https://res.cloudinary.com/dhknvtaq2/image/upload/c_fill,h_243,w_376/v1679235190/ojt/ku1rphznnmm27cjuldzj.png",
            name: "macbook",
            stars: 4.0,
            review: 7,
            sold: 99,
            price: 39.99,
            salePrice: 29.99,
            address:"Palembang"
        },
        {
            id: 5,
            img: "https://res.cloudinary.com/dhknvtaq2/image/upload/c_fill,h_243,w_376/v1679235190/ojt/ku1rphznnmm27cjuldzj.png",
            name: "macbook",
            stars: 5.0,
            review: 7,
            sold: 99,
            price: 39.99,
            salePrice: 29.99,
            address:"Java"
        },
        {
            id: 6,
            img: "https://res.cloudinary.com/dhknvtaq2/image/upload/c_fill,h_243,w_376/v1679235190/ojt/ku1rphznnmm27cjuldzj.png",
            name: "macbook",
            stars: 5.0,
            review: 7,
            sold: 99,
            price: 39.99,
            salePrice: 29.99
        },
        {
            id: 7,
            img: "https://res.cloudinary.com/dhknvtaq2/image/upload/c_fill,h_243,w_376/v1679235190/ojt/ku1rphznnmm27cjuldzj.png",
            name: "macbook",
            stars: 5.0,
            review: 7,
            sold: 99,
            price: 39.99,
            salePrice: 29.99,
            address:"Jakarta"
        },
        {
            id: 8,
            img: "https://res.cloudinary.com/dhknvtaq2/image/upload/c_fill,h_243,w_376/v1679235190/ojt/ku1rphznnmm27cjuldzj.png",
            name: "macbook",
            stars: 5.0,
            review: 7,
            sold: 99,
            price: 39.99,
            salePrice: 29.99,
            address:"Palembang"
        },
        {
            id: 9,
            img: "https://res.cloudinary.com/dhknvtaq2/image/upload/c_fill,h_243,w_376/v1679235190/ojt/ku1rphznnmm27cjuldzj.png",
            name: "macbook",
            stars: 5.0,
            review: 7,
            sold: 99,
            price: 39.99,
            salePrice: 29.99,
            address:"Sumatra"

        },
        {
            id: 10,
            img: "https://res.cloudinary.com/dhknvtaq2/image/upload/c_fill,h_243,w_376/v1679235190/ojt/ku1rphznnmm27cjuldzj.png",
            name: "macbook",
            stars: 5.0,
            review: 7,
            sold: 99,
            price: 39.99,
            salePrice: 29.99,
            address:"Palembang"

        },
        {
            id: 11,
            img: "https://res.cloudinary.com/dhknvtaq2/image/upload/c_fill,h_243,w_376/v1679235190/ojt/ku1rphznnmm27cjuldzj.png",
            name: "macbook",
            stars: 5.0,
            review: 7,
            sold: 99,
            price: 39.99,
            salePrice: 29.99,
            address:"Jakarta"

        },
        {
            id: 12,
            img: "https://res.cloudinary.com/dhknvtaq2/image/upload/c_fill,h_243,w_376/v1679235190/ojt/ku1rphznnmm27cjuldzj.png",
            name: "macbook",
            stars: 5.0,
            review: 7,
            sold: 99,
            price: 39.99,
            salePrice: 29.99,
            address:"Java"
        }
    ]
    let adress=[]
    let rate=[]
    for (let i = 0; i < array.length; i++) {
        adress.push(data[i].address)
        rate.push(data[i].push)       
    }
    let adressCheckbox= new Set(adress)
    
    const [column, setColumn] = useState(1)
    const handerClick = (id) => {
        console.log(id);
    }
    const addToCart = (id) => {
        console.log("addtocart---->", id);
    }
    /*     const convertList=()=>{
            
            setColumn(1)
        }
        const convertGrid=()=>{
            
            setColumn(2)
        } */

    return (
        <>

            <Header />
            <div className="center-search">

                <div className="center-left">
                    <div className="catalog">
                        <h5>All Product</h5>
                        <p>LL</p>
                        <p>g</p>
                        <p>zzzz</p>
                        <p>zz</p>
                        <p>zzzz</p>
                        <p>zzzzz</p>
                        <p>zzzzz</p>
                        <p>zzzzz</p>
                        <p>zzzz</p>
                        <p>zzzz</p>
                        <p>zzzzz</p>
                    </div>
                    <Form>
                        <div className="search-price">
                            <div className="menu-price">
                                <p>Filter by Price</p><img src="./Search/down.png" alt="" className="drop-icon" />
                            </div>
                            <Form.Item name="price" className="price-drop">
                                <ConfigProvider
                                    theme={{
                                        token: {
                                            colorPrimary: '#ff2c18',
                                        },
                                    }}
                                >
                                    <Slider min={100} max={250} />
                                </ConfigProvider>
                                <span>Price: <span> $100-$250</span></span>
                            </Form.Item>
                        </div>

                        <div className="search-location">
                            <div className="menu-location">
                                <p>Filter by Location</p><img src="./Search/down.png" alt="" className="drop-icon" />
                            </div>

                            <div className="location-drop">
                                <ConfigProvider
                                    theme={{
                                        token: {
                                            colorPrimary: '#ff2c18',
                                        },
                                    }}
                                >
                                    <Checkbox name="Jakarta">Jakarta</Checkbox><br />
                                    <Checkbox >Java</Checkbox><br />
                                    <Checkbox>Sumatra</Checkbox><br />
                                    <Checkbox>Palembang</Checkbox>
                                </ConfigProvider>
                            </div>
                        </div>

                        <div className="search-rate">
                            <div className="menu-rate">
                                <p>Filter by Rate</p><img src="./Search/down.png" alt="" className="drop-icon" />
                            </div>
                            <div className="rate-drop">
                                <ConfigProvider
                                    theme={{
                                        token: {
                                            colorPrimary: '#ff2c18',
                                        },
                                    }}
                                >
                                    <Checkbox>⭐</Checkbox><br />
                                    <Checkbox>⭐⭐</Checkbox><br />
                                    <Checkbox>⭐⭐⭐</Checkbox><br />
                                    <Checkbox>⭐⭐⭐⭐</Checkbox><br />
                                    <Checkbox>⭐⭐⭐⭐⭐</Checkbox>
                                </ConfigProvider>

                            </div>
                        </div>
                        <div className="search-brand">
                            <div className="menu-brand">
                                <p>Filter by Brand</p><img src="./Search/down.png" alt="" className="drop-icon" />
                            </div>
                        </div>
                        <div className="search-promotion">
                            <div className="menu-promotion">
                                <p>Filter by Promotion</p><img src="./Search/down.png" alt="" className="drop-icon" />
                            </div>
                        </div>
                        <div className="search-payment">
                            <div className="menu-payment">
                                <p>Fillter by Payment</p><img src="./Search/down.png" alt="" className="drop-icon" />
                            </div>
                        </div>
                        <div className="search-shipment">
                            <div className="menu-shipment">
                                <p>Filter by Shipment</p><img src="./Search/down.png" alt="" className="drop-icon" />
                            </div>
                        </div>
                        <Form.Item>
                            <ConfigProvider
                                theme={{
                                    token: {
                                        colorPrimary: '#ff2c18',
                                    },
                                }}
                            >
                                <Button className="btn" htmlType="submit" type="primary">Filter</Button>
                            </ConfigProvider>
                        </Form.Item>
                        <p className="reset">Reset Filter</p>
                    </Form>
                </div>



                <div className="center-right">
                    <div className="top-list">
                        <div className="top-left">
                            <p>View (20) of (160) product</p>
                        </div>
                        <div className="top-right">
                            <p>Sort by:Newest Item</p>

                        </div>
                    </div>
                    <div className="list">
                        <List

                            pagination={{
                                pageSize: 5
                            }}

                            dataSource={data}
                            renderItem={(item, index) => (
                                <List.Item key={index}>
                                    <div onClick={() => handerClick(item.id)} className="product">
                                        <div className="product-no-media">
                                            <div className="img-box">
                                                <img src={item.img} alt="" /><br />

                                            </div>

                                            <div className="title">
                                                <div className="left-title">
                                                    <div className="rate-sold">
                                                        <div className="rate">
                                                            <p className="rate-point"> {item.stars}.0  </p>
                                                            <div className="rate-stars"><p>{item.stars === 5 ? "⭐⭐⭐⭐⭐" : item.stars === 4 ? "⭐⭐⭐⭐" : item.stars === 3 ? "⭐⭐⭐" : item.stars === 2 ? "⭐⭐" : "⭐"} </p></div>
                                                        </div>
                                                        <div className="review">
                                                            <p> Review ({item.review})</p>
                                                        </div>
                                                        <div className="sold">
                                                            <p> Sold ({item.sold}) </p>
                                                        </div>

                                                    </div>
                                                    <div className="name">
                                                        <p> {item.name} {item.id}</p>
                                                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, excepturi.</span><br />

                                                    </div>
                                                    <Button type="primary" onClick={() => addToCart(item.id)} className="btn"> Art To Card</Button>
                                                </div>
                                                <div className="price">
                                                    <p className="old-price">${item.price}</p>
                                                    <p className="new-price">${item.salePrice}</p>
                                                    <div className="wishlist">
                                                        <img src="./Search/heart.png" alt="" />
                                                        <p> Add To Wishlist</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <Button type="primary" onClick={() => addToCart(item.id)} className="btn-media"> Art To Card</Button>
                                            <p className="old-price-media">${item.price}</p>
                                            <p className="new-price-media">${item.salePrice}</p>
                                            <div className="wishlist-media">
                                                <img src="./Search/heart.png" alt="" />
                                                <p> Add To Wishlist</p>
                                            </div>
                                        </div>

                                    </div>

                                </List.Item>
                            )} />
                    </div>
                </div>
            </div>

            <Footer />

        </>

    );
}

export default Search;