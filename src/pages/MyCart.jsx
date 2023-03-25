
import Footer from "../components/component-recycle/Footer";
import Header from "../components/component-recycle/Header";
import { Link, Outlet } from "react-router-dom"
import "./MyCart.scss"
import Checkbox from "../components/MyCart-component/mycartCheckbox";
import { Catalogues } from "../components/MyCart-component/mock"
import React, { useEffect, useState } from "react";
import { List, ConfigProvider } from "antd";
/* import "antd/dist/antd.css"; */





function MyCart() {
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isCheck, setIsCheck] = useState([]);
    const [list, setList] = useState([]);


    useEffect(() => {

        setList(Catalogues);
    }, [list]);
    const handleSelectAll = e => {
        setIsCheckAll(!isCheckAll);
        setIsCheck(list.map(li => li.id));
        if (isCheckAll) {
            setIsCheck([]);
        }
    };

    const handleClick = e => {
        const { id, checked } = e.target;
        setIsCheck([...isCheck, id]);
        if (!checked) {
            setIsCheck(isCheck.filter(item => item !== id));
        }
    };
    console.log(isCheck);

    return (<>
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
                            dataSource={list}

                            renderItem={(item, index) => (
                                <List.Item  >
                                    <div className="product-cart">
                                        <Checkbox
                                            key={item.id}
                                            type="checkbox"
                                            name={item.name}
                                            id={item.id}
                                            handleClick={handleClick}
                                            isChecked={isCheck.includes(item.id)}

                                        />
                                        <div className="product-info">
                                            <div className="img-product">

                                            </div>
                                            <div className="right-list">
                                                <div className="bill-product">
                                                    <p className="name">{item.name}</p>
                                                    <p className="price">$100.99</p>
                                                    <div className="quantity">
                                                        <div className="img">
                                                            <img src="./MyCart/decrease.png" alt="" />
                                                        </div>

                                                        <p>1</p>
                                                        <div className="img">
                                                            <img src="./MyCart/increase.png" alt="" />

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="remove">
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
                        </div>
                        <button>Checkout</button>
                        <p className="continue">Continue Shopping</p>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
        <Outlet />
    </>);
}

export default MyCart;