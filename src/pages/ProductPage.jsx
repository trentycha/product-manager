import {useState, useEffect} from 'react'
import getProducts from '../services/productsService.js'
import ProductComp from '../components/ProductComp.jsx'

function ProductPage() {
  const [products, setProducts] = useState([])

  useEffect (() => {
    getProducts()
       .then(data => setProducts(data))
       .catch(error => console.error(error))
  }, [])

  return (
    <div className="container mt-5">
      <h1>Bienvenue sur Product Manager</h1>
      <div className="row">
        {products.map(product => (
            <ProductComp key={product.id} image={product.image} name={product.name} 
            description={product.description} price={product.price} available={product.available} id={product.id}
            />
        ))}
      </div>
    </div>
  )
}

export default ProductPage
