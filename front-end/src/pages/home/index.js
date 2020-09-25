import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      goods: []
    };
  }
  componentDidMount() {
    this.getAllGoods();
  }

  getAllGoods = () => {
    axios
      .get("http://localhost:8080/goodss")
      .then(function(response) {
        // this.setState({
        //   goods: response,
        // })
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
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
