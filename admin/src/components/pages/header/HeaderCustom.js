import React from 'react';
import { Menu, Dropdown, Avatar } from 'antd';
import http from "../../../api/api"

export default (props) => {
    const loginOut = () => {
        const { token } = props.saveToken;
        http.loginOut({ token });
        sessionStorage.removeItem("token");
        props.history.replace("/login");
    }
    const onClick = function ({ key }) {
        switch (Number(key)) {
            case 1:
                loginOut();
                break;
            default:
                return;
        }
    };
    const menu = (
        <Menu onClick={onClick}>
            <Menu.Item key="1">退出登陆</Menu.Item>
            <Menu.Item key="2">个人中心</Menu.Item>
        </Menu>
    );
    return <div className="header">
        <Avatar src={require("../../../images/header.jpg")} style={{ marginRight: "20px" }} />
        <Dropdown overlay={menu}>
            <a >
                <span style={{ marginRight: "100px", color: "#333" }}>欢迎，admin</span>
            </a>
        </Dropdown>

    </div>
}



