import React, { useState } from 'react';
export function Product({ productData , cart, setCart}) {
  console.log(productData);
  
  const handleAddRemoveCart = (productId) => {
    if (cart.includes(productId)) {
      setCart(cart.filter(id => id !== productId));
    } else {
      setCart([...cart, productId]);
    }
  };

  return (
    <div className="shop-card">
      
      <img className="shop-poster" src={productData.product_thumb} alt={productData.product_name} />
      <h3 className="shop-name">{productData.product_name}</h3>
      <h5 style={{ margin: "0px" }}>Description - {productData.ProductDetails}</h5>
      <p style={{ margin: "0px" }}>Rating: ⭐{productData.average_rating} {productData.rating_text}</p>
      <div className="style-card">
        <p>Cost: Rs {productData.cost}/-</p>
        <button onClick={() => handleAddRemoveCart(productData.shop_id)}>
        {cart.includes(productData.shop_id) ? 'Remove from Cart' : 'Add to Cart'}</button>
      </div>
    </div>

  );
}