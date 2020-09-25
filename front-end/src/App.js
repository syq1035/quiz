import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home";
import Order from "./pages/order";
import AddGoods from "./pages/addGoods";
import "./pages/main.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/addGoods" component={AddGoods} />
          <Route exact path="/order" component={Order} />
          <Route exact path="/" component={Home} />
          <Redirect from="/*" to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
