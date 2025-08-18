import StoreFront from './pages/StoreFront'
import { Routes, Route } from 'react-router-dom'
import Product from './pages/Product'
import ProductDetails from './pages/ProductDetails'

export default function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<StoreFront />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </main>
  )
}
