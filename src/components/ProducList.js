import React, { Component, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Masonry from "react-masonry-css";
import "./styles.css";
import { buyAProduct, sellAProduct } from "../redux/productsSlice";

function ProducList() {
  const dispatch = useDispatch();
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const products = useSelector((state) => state.products.items);
  const handleClick = (price, name) => {
    dispatch(buyAProduct(price, name));
  };
  

  return (
    <div className="productList">
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {products.map((item, i) => (
          <div style={{ background: "white" }} key={i}>
            <img width="250px" height="200px" alt="#" src={item.img}></img>

            <div>{item.name}</div>
            <div>{numberWithCommas(item.price)}$</div>
            <button
              style={{ background: "green" }}
              onClick={() => handleClick(item.price, item.name)}
            >
              Buy
            </button>
            <input style={{ margin: "20px" }} onChange={(e)=>e.target.value}></input>
            <button
              onClick={() => dispatch(sellAProduct(item.price, item.name))}
            >
              Sell
            </button>
          </div>
        ))}
      </Masonry>
    </div>
  );
}
export default ProducList;
