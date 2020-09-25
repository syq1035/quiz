import React, { Component } from "react";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      goods: [
        { name: "可乐", price: 2, unit: "瓶" },
        { name: "可乐", price: 2, unit: "瓶" },
        { name: "可乐", price: 2, unit: "瓶" },
        { name: "可乐", price: 2, unit: "瓶" },
        { name: "可乐", price: 2, unit: "瓶" }
      ]
    };
  }
  render() {
    return (
      <div className="home-main">
        {this.state.goods.length > 0 ? (
          this.state.goods.map((product, index) => (
            <div className="goods-item" key={index}>
              <img alt="goods" />
              <p>{product.name}</p>
              <p>
                单价：{product.price}元 / {product.unit}
              </p>
            </div>
          ))
        ) : (
          <p>暂无商品</p>
        )}
      </div>
    );
  }
}

export default Home;
