import {useContext} from 'react'
import {Link} from 'wouter'
import itemContext from "../context/itemContext"

export  function Cart() {
  const {item} = useContext(itemContext)
  let len = Object.keys(item).length;
  

  return (
    <Link to="/cart">
    <button className="cart">
        <span className="material-icons-outlined">shopping_cart</span>
    </button>
    <div className="cart__counter">
      <h5>{len}</h5>
    </div>
    </Link>
  )
}
