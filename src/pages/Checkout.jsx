import { Button, Form, Input, Select, ConfigProvider } from "antd";
import Footer from "../components/component-recycle/Footer";
import Header from "../components/component-recycle/Header";
import { Link, Outlet } from "react-router-dom"
import "./Checkout.scss"
function Checkout() {
    return (
        <>
        <Header/>
         <div className="checkout">
            <div className="title">
                <h1>Checkout</h1>
            </div>


            <div className="center">
                <div className="center-info">

                    <ConfigProvider
                        theme={{
                            token: {
                                colorPrimary: '#ff2c18',
                                fontWeight: "400",

                                color: "#383838"
                            },
                        }}
                    >
                        <Form
                            layout="vertical"

                        >


                            <div className="form">


                                <div className="left-form">
                                    <div className="buyer-info">
                                        <h2>Buyer Info</h2>
                                    </div>
                                    <div className="input-form">
                                        <div className="left-input">
                                            <Form.Item label="First Name" name="firstname">
                                                <Input className="input" />
                                            </Form.Item>
                                            <Form.Item label="Address" name="address">
                                                <Input className="input" />
                                            </Form.Item>
                                            <Form.Item label="Country" name="country">
                                                <Input className="input" />
                                            </Form.Item>
                                            <Form.Item label="State" name="State">
                                                <Select className="input" placeholder="Select State" />
                                            </Form.Item>
                                        </div>
                                        <div className="right-input">
                                            <Form.Item label="Last name" name="lastName">
                                                <Input className="input" />
                                            </Form.Item>
                                            <Form.Item label="Contact" name="contact">
                                                <Input className="input" />
                                            </Form.Item>
                                            <Form.Item label="City" name="city">
                                                <Input className="input" />
                                            </Form.Item>
                                            <Form.Item label="Zip code" name="zipCode">
                                                <Input className="input" />
                                            </Form.Item>
                                        </div>

                                    </div>
                                    <Form.Item label="Node" name="node">
                                        <Input.TextArea showCount maxLength={100} />
                                    </Form.Item>
                                </div>
                                <div className="left-form-media" >
                                    <div className="buyer-info">
                                        <h2>Buyer Info</h2>
                                    </div>
                                    <Form.Item label="First Name" name="firstname">
                                        <Input className="input" />
                                    </Form.Item>
                                    <Form.Item label="Last name" name="lastName">
                                        <Input className="input" />
                                    </Form.Item>
                                    <Form.Item label="Address" name="address">
                                        <Input className="input" />
                                    </Form.Item>
                                    <Form.Item label="Contact" name="contact">
                                        <Input className="input" />
                                    </Form.Item>
                                    <Form.Item label="Country" name="country">
                                        <Input className="input" />

                                    </Form.Item>
                                    <Form.Item label="City" name="city">
                                        <Input className="input" />
                                    </Form.Item>
                                    <Form.Item label="State" name="State">
                                        <Select placeholder="Select State" />
                                    </Form.Item>
                                    <Form.Item label="Zip code" name="zipCode">
                                        <Input className="input" />
                                    </Form.Item>

                                    <Form.Item label="Node" name="node">
                                        <Input.TextArea showCount maxLength={100} />
                                    </Form.Item>
                                </div>

                                <div className="right-form">
                                    <h3> Your Order Summary</h3>
                                    <div className="list-order">
                                        <div className="order">
                                            <p className="quantity">1x</p>
                                            <div className="name-price">
                                                <p className="name">USb</p>
                                                <p className="price">$100</p>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="bill">
                                        <div className="total-sub">
                                            <h5 >Subtotal</h5>
                                            <p>$300</p>
                                        </div>
                                        <div className="shipping">
                                            <h5 >Shiping</h5>
                                            <p>$15</p>
                                        </div>
                                        <div className="tax">
                                            <h5 >Tax</h5>
                                            <p>$10</p>
                                        </div>
                                    </div>
                                    <div className="total">
                                        <h5>Total</h5>
                                        <p>$325</p>
                                    </div>
                                    <div className="payment">
                                        <p>Payment</p>
                                        <div className="btn">
                                            <button className="credit">Credit Cart</button>
                                            <button className="bank" >Bank Tranfer</button>
                                            <button className="paypal">Paypal</button>
                                        </div>

                                    </div>

                                    <Form.Item>
                                        <Button className="checkout" type="primary" htmlType="submit" >Checkout</Button>
                                    </Form.Item>

                                    <h6>Back To Cart</h6>
                                </div>
                            </div>



                        </Form>
                    </ConfigProvider>
                </div>
            </div>
        </div>;
        <Footer/>
        </>)
       
}

export default Checkout;