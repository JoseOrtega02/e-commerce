import {React,useContext} from 'react'
import { Pay } from './Pay'
import itemContext from '../../context/itemContext'
export  function Footer() {
  const {item} = useContext(itemContext)
  let totalAmount = 0; 
  const total = () =>{
    item.map(item =>{
      let price = Number(item.price)
      totalAmount += price
      
    })
  }
  total()
  
  return (
    <div className="footer">
        <h2>Total: {totalAmount}¥</h2>
        <Pay/>
    </div>
  )
}
