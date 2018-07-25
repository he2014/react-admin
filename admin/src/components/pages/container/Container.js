import React, { Component } from 'react';
import { connect } from 'react-redux';
import RoutesComponent from "../../../routers"
import Siders from "../sider/Siders"
import { Layout, Icon } from 'antd';
import HeaderCustom from "../header/HeaderCustom"
const { Header, Content, Footer } = Layout;

class Container extends Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render() {
        const { token } = this.props.saveToken;
        return (
            <section>
                <Layout style={{ height: "100%" }}>
                    <Siders collapsed={this.state.collapsed} />
                    <Layout>
                        <Header className="header-main" >
                            <Icon style={{ float: "left", }}
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                            <HeaderCustom {...this.props} />
                        </Header>
                        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                            <RoutesComponent token={token} />
                        </Content>
                        <Footer>
                            Copyright © 2018  FISSION 版权所有
                        </Footer>
                    </Layout>
                </Layout>
                <style>
                    {
                        `
                        .header-main{
                            background: whitesmoke;
                            box-shadow: 0 1px 1px #666;
                            color: black;
                        }`
                    }
                </style>
            </section>
        );
    }
}

export default connect(state => ({
    saveToken: state.saveToken
}))(Container)