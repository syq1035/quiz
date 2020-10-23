import React, { Component } from "react";
import axios from "axios";
import { Button, Popconfirm, Table, message } from 'antd';
import { ShoppingCartOutlined, DeleteOutlined } from '@ant-design/icons';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      goods: [],
      cart: []
    };
  }
  componentDidMount() {
    this.getAllGoods();
  }

  getAllGoods = () => {
    axios
      .get("http://localhost:8080/goodss")
      .then((res) =>{
        this.setState({
          goods: res.data,
        })
      })
      .catch((error) => {
        console.log(error);
      });
  };

  addToShoppingcart(product) {
    const { cart } = this.state
    let has = false;
    let curIndex = -1
    cart.forEach((item, index) => {
      if (item.id === product.id) {
        has = true;
        curIndex = index;
      }
    })
    if (has) {
      cart[curIndex].count = cart[curIndex].count +1
    } else {
      cart.push({name: product.name, id: product.id, count: 1})
    }
    this.setState({
      cart
    })
  }

  cartColumns = [
    {
      title: '商品',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '数量',
      key: 'count',
      render: (text, record) => (
        <p>
          <Button shape="circle" size="small" className="small-btn">+</Button>
          {record.count}
        <Button shape="circle" size="small" className="small-btn">-</Button>
        </p>
      )
    },
    {
      title: "",
      key: "action",
      render: (text, record) => (
        <Button type="text" danger><DeleteOutlined /></Button>
      )
    }
  ]


  text() {
    return (
      <div>
        {
          this.state.cart.length ? 
            <Table dataSource={this.state.cart} columns={this.cartColumns} pagination={false} />
            : <p>暂无商品，请添加商品</p>
        }
        
      </div>
    )
  }
  confirmOrder = () => {
    if (!this.state.cart.length) {
      message.error("请添加商品后下单")
      return
    }
    axios.post("http://localhost:8080/order", {
        cart: this.state.cart
      })
      .then(function(response) {
        message.success("下单成功");
      })
      .catch(function(error) {
        message.error("下单失败");
      });
  }

  render() {
    return (
      <div className="home-main">
        <div className="goodsList">
          {this.state.goods.length > 0 ? (
            this.state.goods.map((product, index) => (
              <div className="goods-item" key={product.id}>
                <img className="img" src={product.photoUrl} alt={product.name} />
                <p>{product.name}</p>
                <p>
                  单价：{product.price}元 / {product.unit}
                </p>
                <Button shape="circle"  size="small" onClick={this.addToShoppingcart.bind(this, product)}>+</Button>
              </div>
            ))
          ) : (
            <p>暂无商品</p>
          )}
        </div>

        <div className="cart">
          <Popconfirm
            title={this.text()}
            onConfirm={this.confirmOrder}
            okText="立即下单"
            cancelText="取消"
            icon={null}
            placement="topLeft"
          >
            <Button type="primary" shape="circle" className="cart-btn">
              <ShoppingCartOutlined />
            </Button>
          </Popconfirm>
        </div>
      </div>
    );
  }
}

export default Home;
