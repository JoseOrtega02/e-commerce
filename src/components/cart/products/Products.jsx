import {React,useContext} from 'react'
import itemContext from "../../context/itemContext"
import {v4 as uuid} from "uuid"

export  function Products() {
  const {item} = useContext(itemContext)

  return (
    <div className="cart__container--products">
    {item.map(product =>{
      return(
        <div className="product__cart" key={uuid()}>
        <img src={product.img} alt=""/>
        <div>
            <h2>{product.name}</h2>
            <h3>¥{product.price}</h3>
        </div>
        <button>
        <span className="material-icons-outlined">clear</span>
        </button>
    </div>
      )
    })}
      </div>
    )
  
}
