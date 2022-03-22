import {React} from 'react'
import {CartHeader} from "./header/CartHeader"
import {Products} from "./products/Products"


export  function Cart() {
  
  return (
    <div className="cart">
        <CartHeader/>
        <Products/>
        
    </div>
  )
}