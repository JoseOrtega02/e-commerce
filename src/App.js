import {Header} from './components/header/header'
import {Products} from './components/products/products'
import "./sass/style.css"
import {Cart} from './components/cart/Cart'
import {Route} from "wouter"
import itemContext from './components/context/itemContext'
import {useState} from "react"
import {Pay} from "./components/payPage/Pay"

function App() {
  
  const [item,setItem] = useState([])
  const value = {item,setItem}
  
  
  return (
    <itemContext.Provider value={value}>
      <>
    <Route path='/'>
    <Header/>
    <Products/>
    </Route>
    <Route path="/cart">
    <Cart />
    </Route>
    <Route path="/pay">
      <Pay  />
    </Route>
    </>
    </itemContext.Provider>
  );
}

export default App;
