import {React,useContext,useEffect,useState} from 'react'
import itemContext from "../../context/itemContext"
import {v4 as uuid} from "uuid"
import {Link} from 'wouter'

export  function Products() {
  const {item} = useContext(itemContext)
  const [any,update] = useState(item)
  let totalAmount = 0; 

  useEffect(() => {
    update(item)
    
  },[any])

  
  const total = () =>{
    item.map(item =>{
      let price = Number(item.price)
      totalAmount += price
      
    })
  }
  total()

  
  
    return (
      <div className="cart__container--products">
      {any.map(product =>{
        return(
          <div className="product__cart" key={uuid()}>
          <img src={product.img} alt=""/>
          <div>
              <h2>{product.name}</h2>
              <h3>¥{product.price}</h3>
          </div>
          <button onClick={()=>{
            let indx = item.indexOf(product,0)
          
             any.splice(indx,1)
             const newAny = [...any]
            update(newAny)
            
          }}>
          <span className="material-icons-outlined">clear</span>
          </button>
      </div>
        )
      })}
      <div className="footer">
          <h2>Total: {totalAmount}¥</h2>
          
          <Link to="/pay">
          <button className="footer__button"  
          >Pay</button>
          </Link>
      </div>
        </div>
      )
}
