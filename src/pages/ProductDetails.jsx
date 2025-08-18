import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import useFetch from '../utilities/useFetch'
import Loader from './Loader'

export default function ProductDetails() {
  const { id } = useParams() 
  const [product, setProduct] = useState(null)
  const { get, loading } = useFetch(
    'https://router-12f10-default-rtdb.europe-west1.firebasedatabase.app/'
  )

  useEffect(() => {
    get(`products/${id}.json`)
      .then((data) => setProduct(data))
      .catch((error) => console.error(error))
  }, [id])

  if (loading) return <Loader />

  return (
    <div>
      <Link to="/">Back home</Link>
      {product ? (
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h3>${product.price}</h3>
          <img src={product.image} width="100" alt={product.name} />
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  )
}
