import React from 'react'
import {Header} from '../header/header'

export  function Pay() {
  return (
    <>
    <Header/>
    <div className="pay__container">
        <div className="pay__container--cus_info">
            <h1>Customer Info</h1>
            <label htmlFor="name">First Name:</label><input type="text" placeholder="jhon" id="name"/>
            <label htmlFor="secname">Second Name:</label><input type="text" placeholder="jhonson" id="secname"/>
            <label htmlFor="email">Email:</label><input type="email" placeholder="jhonson@email.com" id="email"/>
            <label htmlFor="address">Address:</label><input type="text" placeholder="123 manhatan" id="address"/>
            <label htmlFor="country">Country:</label><input type="text" placeholder="U.S.A" id="country"/>
        </div>
        <div className="pay__container--pay_info">
            <h1>Payment Information</h1>
            <div>
        <label htmlFor="creditcard">Credit Card:</label><br/><input type="number" placeholder="0101010101001" id="creditcard"/>
        </div>
        <div>
        <label htmlFor="datecard">Date of Card:</label><br/><input type="date" placeholder="05/27/02" id="datecard"/>
        </div>
        </div>
        <div className="pay__container--finish--info">
            
            <button type="submit">Checkout and Pay</button>
        </div>
    </div>
    </>
  )
}
