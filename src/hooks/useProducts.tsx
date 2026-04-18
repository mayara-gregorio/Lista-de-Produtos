import { useEffect, useState } from "react"

type Product = {
  id: number,
  title: string,
  thumbnail: string
}

export default function useProducts(){
  const [productsList, setProductsList] = useState<Product[]>([])
  //adicionar estado de carregando

  useEffect(()=>{
    const controller = new AbortController()
    const signal = controller.signal
    setTimeout(() =>
        fetch('https://dummyjson.com/products', {signal})
      .then(res => res.json())
      .then(data => {
        setProductsList(data.products)
      }).then(()=> console.log("Consulta Feita")).catch( err => {
        if (err.name === "AbortError"){
          console.log("requisição cancelada")
        }else{
          console.log(err)
        }
      })
    ,2000)

    return () => {
      controller.abort()
    }

  }, [])

  return {productsList}
}
