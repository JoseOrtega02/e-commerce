import {React,useState,useEffect} from 'react'
import { Rakuten } from '../../services/Rakuten'
import {v4 as uuid} from "uuid"
import itemContext from "../context/itemContext"
import { useContext } from 'react'

export  function Products() {
  const [products,setProducts] = useState()
  const {productos,setItem} = useContext(itemContext)

  
  useEffect(() =>{
    Rakuten().then(products =>{
      setProducts(products)
    })
  },[])
  if (products !== undefined){
    return (
      <div className="products">
        {products.map(product =>{
          return (
          <div className="product" key={uuid()}>
          <img src={product.imageUrl} alt=""/>
          <h2>{product.shopName}</h2>
          <h3>¥{product.itemPrice}</h3>
          <button onClick={()=>{setItem(productos => [...productos, {name:product.shopName, price: product.itemPrice,img: product.imageUrl}])}}>Add to the cart</button>
        </div>
          )
        })}
      </div>
    )
  }
  return <h1>Loading...</h1>
  
}
