import React from 'react'
import { Link } from 'wouter'
export  function Home() {
  return (
    <Link to='/'>
    <button className="cart__home"><span className="material-icons-outlined">
    home
    </span></button>
    </Link>
  )
}
