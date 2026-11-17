import { Routes, Route} from 'react-router'
import ProductPage from './pages/ProductPage.jsx'
import AddProductPage from './pages/AddProductPage.jsx'
import ProductDetailsPage from './pages/ProductDetailsPage.jsx'
import UpdateProduct from './pages/UpdateProduct.jsx'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<ProductPage />} />
      <Route path="/products/add" element={<AddProductPage />} />
      <Route path='/products/update/:id' element={<UpdateProduct/>} />
      <Route path="/products/:id" element={<ProductDetailsPage />} />
    </Routes>
  )
}

export default App
