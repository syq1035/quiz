import React, { Component } from "react";
import "./header.css";
import { withRouter } from "react-router-dom";
import { Menu } from "antd";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  PlusOutlined
} from "@ant-design/icons";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      current: "home"
    };
  }
  handleNavClick = e => {
    this.props.history.push(`/${e.key}`);
    this.setState({ current: e.key });
  };

  render() {
    return (
      <div className="header">
        <Menu
          mode="horizontal"
          theme="dark"
          onClick={this.handleNavClick}
          selectedKeys={this.state.current}
        >
          <Menu.Item key="home" icon={<HomeOutlined />}>
            商城
          </Menu.Item>
          <Menu.Item key="order" icon={<ShoppingCartOutlined />}>
            订单
          </Menu.Item>
          <Menu.Item key="addGoods" icon={<PlusOutlined />}>
            添加商品
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default withRouter(Header);
