import { useState } from "react";
import "./App.css";
import Product_DATA from "./Data/cart.json"
import { Product } from "./component/Product"
export default function App() {
  const [cart, setCart] = useState([]);
  const productData = Product_DATA;
  console.log(productData)
  return (
    <div className="App">
      <div className="topbutt">
        <label className="topLabelProp">HAPPY SHOPPING</label>
        <button className="topButtonProp">Home</button>
        <button className="topButtonProp">About</button>
        <button className="topCartButtonProp">Cart {cart.length}</button>
      </div>
      <div className="top">
        <img src="https://as2.ftcdn.net/v2/jpg/03/14/20/99/1000_F_314209989_NwKevyiNyMvXcM4mMkWjhUn0TAyO4i6I.jpg" alt="topi" className="topi"/>
      </div>
      <div className="shop-list">
        {productData.map((rest_data) => (
          <Product productData={rest_data} cart={cart} setCart={setCart}/>
        ))}
      </div>
    <div className="bott">
        Copyright © My Website 2024
    </div>
    </div>
  );
}