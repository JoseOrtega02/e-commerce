import React from 'react'
import {Cart} from "./cart"

export  function Header() {
  return (
    <div className="header">
        <div className="header__span">
        <span className="material-icons-outlined">diamond</span>
        </div>
        <Cart/>
     </div>
  )
}
