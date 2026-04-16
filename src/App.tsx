import { useEffect, useState } from "react"

type Product = {
  id: string,
  title: string,
  thumbnail: string
}

function ExibirProducts(){
  const [productsList, setProductsList] = useState<Product[]>([])
  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {
      setProductsList(data.products)
    })
  })

  return(
    <div>
     {productsList.map(product => (
      <div key={product.id}>
        <h1>{product.title}</h1>
        <img src={product.thumbnail} alt={product.title} />
      </div>
     ))}
    </div>
  )
}

export default function App(){
  const [show, setShow] = useState(false)
  return(
    <div>
      <button onClick={() => setShow(!show)}>{show ? "Mostrar produtos" : "Ocultar produtos"}</button>
      {show && <ExibirProducts/>}
    </div>
  )
}