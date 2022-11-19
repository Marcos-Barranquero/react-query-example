import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../api/productsAPI'

function Products() {
  const { isLoading, data, isError, error } = useQuery({ queryKey: ['products'], queryFn: getProducts })

  if (isLoading) return <div>Loading...</div>
  else if (isError) return <div>Error: {error.message}</div>
  else
    return (
      <div>
        {data.map(product => (
          <div key={product.id}>{product.name} - {product.price}</div>
        ))}
      </div>
    )
}

export default Products
