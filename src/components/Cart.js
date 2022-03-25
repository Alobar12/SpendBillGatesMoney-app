import React, { Component, useEffect } from 'react'
import { useSelector } from 'react-redux';


function Cart(){
    const product=useSelector(state=>state.products.cart)
    let sum=0;
    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      };
    return (
      <div>
          <h1>Your Receipt</h1>
          {product.map((item,i)=><div key={i}>{item.name}/ {numberWithCommas(item.price)}$
          
          </div>)}
          <hr></hr>
          {product.map((item)=>{sum+=item.price})}
            <div>Total Price: {numberWithCommas(sum)}$</div>
          
          
      </div>
    )
  
}
export default Cart;
