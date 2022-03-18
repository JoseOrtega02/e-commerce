import React from 'react'
import {Link} from 'wouter'

export  function Cart() {
  
  return (
    <Link to="/cart">
    <button className="cart">
        <span className="material-icons-outlined">shopping_cart</span>
    </button>
    </Link>
  )
}
