import React, { Component } from "react";
import { Table, Button } from 'antd';
import axios from "axios";

class Order extends Component {
  constructor() {
    super();
    this.state = {
      orders: [{
        id: 1,
        name: '苹果',
        price: 5,
        count: 4,
        unit: '斤'
      }]
    };
  }

  columns = [
    {
      title: '名字',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '单价',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: '数量',
      dataIndex: 'count',
      key: 'count',
    },
    {
      title: '单位',
      dataIndex: 'unit',
      key: 'unit',
    },
    {
      title: "操作",
      key: "action",
      render: (text, record) => (
        <Button type="primary" danger onClick={this.deleteOrder.bind(this, record.id)}>删除</Button>
      )
    }
  ]

  componentDidMount() {
    this.getAllOrders();
  }

  getAllOrders = () => {
    axios
      .get("http://localhost:8080/orders")
      .then((res) =>{
        this.setState({
          orders: res.data,
        })
      })
      .catch((error) => {
        console.log(error);
      });
  };

  deleteOrder = (id) => {
    axios
      .delete("http://localhost:8080/order", { params: { id: id } })
      .then((res) =>{
        this.setState({
          orders: res.data,
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="order-main">
        {
          this.state.orders.length ?
            <Table dataSource={this.state.orders} columns={this.columns} pagination={false} />
            : <p>暂无订单，返回商城页面继续购买</p>
        }
        
      </div>
    )
  }
};

export default Order;
