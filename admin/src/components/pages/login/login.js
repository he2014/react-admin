import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initToken } from "../../../store/login/action"
import http from "../../../api/api"
import "./login.css"
import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;


class Login extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    async handleSubmit(e) {
        let value = "";
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                value = values;
            }
        });
        if (value) {
            let result = await http.login(Object.assign({}, value));
            //如果是PC端，token 建议存在cookike 或storange ;页面强制刷新不会丢失token
            sessionStorage.setItem("token", result);
            this.props.initToken({ token: result });
            this.props.history.push("/admin/home")
        }
    }
    render() {

        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login-form-content">
                <section className="login-section">
                    <div style={{ display: "none" }} className="landscape"></div>
                    <div style={{ display: "none" }} className="filter"></div>
                    <canvas style={{ display: "none" }} id="canvas" width="100%" height="100%"></canvas>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: 'Please input your username!' }],

                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            )}
                        </FormItem>
                        <FormItem>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                       </Button>
                        </FormItem>
                    </Form>
                </section>
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(Login);


export default connect(state => ({
    saveToken: state.saveToken
}), { initToken })(WrappedNormalLoginForm);