import useproducts from "../hooks/useProducts";

export function ProductList (){
  const {productsList} = useproducts()

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