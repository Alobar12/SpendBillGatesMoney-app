import React, { Component } from 'react'
import { useSelector } from 'react-redux';
import "./styles.css"



function Money(){
    const money=useSelector(state=>state.products.money)
    console.log(money)
    const numberWithCommas=(x)=> {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return (
      <div className='money'>
          
          
         ${numberWithCommas(money)}
      </div>
    )
  
    }
export default Money;
