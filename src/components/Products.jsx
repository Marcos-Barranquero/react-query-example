import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../api/productsAPI'

function Products() {
  const sortProducts = products => products.sort((a, b) => b.id - a.id)
  const {
    isLoading,
    data: products,
    isError,
    error,
  } = useQuery({ queryKey: ['products'], queryFn: getProducts, select: sortProducts })

  if (isLoading) return <div>Loading...</div>
  else if (isError) return <div>Error: {error.message}</div>
  else
    return (
      <div>
        {products.map(product => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button>Delete</button>
            <input type='checkbox' />
            <label htmlFor=''>In stock</label>
          </div>
        ))}
      </div>
    )
}

export default Products
