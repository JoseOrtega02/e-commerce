import React from 'react'
import {CartHeader} from "./header/CartHeader"
import {Products} from "./products/Products"
import { Footer } from './footer/footer'
export  function Cart() {
  return (
    <div className="cart">
        <CartHeader/>
        <Products/>
        <Footer/>
    </div>
  )
}
