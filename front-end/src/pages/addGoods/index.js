import React, { Component } from "react";
import { Form, Input, Button, message } from "antd";
import axios from "axios";

class AddGoods extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: "",
      unit: "",
      photo: ""
    };
  }

  handleFieldChange = (e, name) => {
    this.setState({
      [name]: e.target.value
    });
  };

  handleSubmit = () => {
    axios
      .post("http://localhost:8080/goods", {
        ...this.state
      })
      .then((res) => {
        message.success("添加商品成功");
      })
      .catch((error) => {
        message.error("添加商品失败");
      });
  };
  render() {
    return (
      <div className="addgoods-main">
        <h1>添加商品</h1>
        <Form onFinish={this.handleSubmit}>
          <Form.Item
            label="名称"
            name="name"
            rules={[
              {
                required: true,
                message: "请输入商品名称!"
              }
            ]}
          >
            <Input
              placeholder="名称"
              value={this.state.name}
              onChange={e => this.handleFieldChange(e, "name")}
            />
          </Form.Item>
          <Form.Item
            label="价格"
            name="price"
            rules={[
              {
                required: true,
                message: "请输入商品价格!"
              }
            ]}
          >
            <Input
              placeholder="价格"
              value={this.state.price}
              onChange={e => this.handleFieldChange(e, "price")}
            />
          </Form.Item>
          <Form.Item
            label="单位"
            name="unit"
            rules={[
              {
                required: true,
                message: "请输入商品单位!"
              }
            ]}
          >
            <Input
              placeholder="单位"
              value={this.state.unit}
              onChange={e => this.handleFieldChange(e, "unit")}
            />
          </Form.Item>
          <Form.Item
            label="图片"
            name="photo"
            rules={[
              {
                required: true,
                message: "请添加商品图片!"
              }
            ]}
          >
            <Input
              placeholder="URL"
              value={this.state.photo}
              onChange={e => this.handleFieldChange(e, "photoUrl")}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default AddGoods;
