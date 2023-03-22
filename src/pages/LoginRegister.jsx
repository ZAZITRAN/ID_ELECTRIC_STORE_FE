import { Form, Input, Checkbox, Button } from "antd"
import { LockOutlined, UserOutlined, } from '@ant-design/icons';
import "./LoginRegister.scss"
import Footer from "../components/component-recycle/Footer";
import Header from "../components/component-recycle/Header";
import { Link } from "react-router-dom";


function LoginRegister() {
    const onFinishLogin = (values) => {
        console.log('Received values of form: ', values);
    };
    const onFinishRegister = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <>
            <Header />

            <div className="centerLogin">
                <div className="part-center">
                    <div className="login box">

                        <Form
                            layout="vertical "

                            className="register form"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinishLogin}>
                            <h6>Login</h6>
                            <p>Already have an account? Please, login!</p><br />
                            <Form.Item
                                name="email"
                                label="Email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Email!',
                                    },
                                    { type: "email" }
                                ]}
                            >
                                <Input className="input" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                            </Form.Item>
                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Password!',
                                    },
                                ]}
                            >
                                <Input.Password className="input"
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                </Button>
                            </Form.Item>
                            <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox className="checkbox">Remember me</Checkbox>
                                </Form.Item>
                                <Link to="" className="login-form-forgot" >
                                    Forgot password
                                </Link>
                            </Form.Item>
                            <div className="login-other">
                                <p>Login with :</p>
                                <div className="icon">
                                    <img src="./LoginImg/insta.png" alt="" />
                                    <img src="./LoginImg/fb.png" alt="" />
                                    <img src="./LoginImg/twit.png" alt="" />
                                </div>
                            </div>
                        </Form>

                    </div>
                </div>



                <div className="part-center">
                    <div className="register box">

                        <Form
                            layout="vertical "


                            className="register form"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinishRegister}>
                            <h6>Register</h6>
                            <p>Don't have an account yet? Register here!</p><br />
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Email!',
                                    },
                                    { type: "email" }
                                ]}
                            >
                                <Input className="input" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                            </Form.Item>
                            <Form.Item
                                label="Passord"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Password!',
                                    },
                                    { min: 6 }
                                ]}
                            >
                                <Input.Password
                                    className="input"
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"

                                />
                            </Form.Item>
                            <Form.Item
                                label="Confirm passord"
                                name="confirmPassword"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Password!',
                                    },
                                    { min: 6 },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue("password") === value) {
                                                return Promise.resolve()
                                            }
                                            return Promise.reject('Confirm password doesn´t match')
                                        }
                                    })
                                ]}
                            >
                                <Input.Password
                                    className="input"
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Confirm Password"

                                />
                            </Form.Item>
                            <Form.Item>

                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        Register
                                    </Button>
                                </Form.Item>
                            </Form.Item>
                        </Form>
                    </div>
                </div>

            </div>

            <Footer />
        </>);
}

export default LoginRegister;