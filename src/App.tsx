import { useState } from "react"
import { ProductList } from "./components/ProductList"

export default function App(){
  const [show, setShow] = useState(false)

  return(
    <div>
      <button onClick={() => setShow(!show)}>{show ? "Ocultar produtos" : "Mostrar produtos"}</button>
      {show && <ProductList/>}
    </div>
  )
}