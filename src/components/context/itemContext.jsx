import {createContext} from "react";

const itemContext = createContext({
    productos:[{name: 'cacas'}],
    setItem: ()=> {},
})

export default itemContext;


