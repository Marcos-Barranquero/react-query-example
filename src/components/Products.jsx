import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { getProducts, deleteProduct } from '../api/productsAPI'

function Products() {
  const sortProducts = products => products.sort((a, b) => b.id - a.id)
  const { isLoading, data: products, isError, error } = useQuery({ queryKey: ['products'], queryFn: getProducts, select: sortProducts })

  const queryClient = useQueryClient()
  const deleteProductMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      console.log('Product deleted successfully')
      queryClient.invalidateQueries('products')
    },
  })

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
            <button
              onClick={() => {
                deleteProductMutation.mutate(product)
              }}
            >
              Delete
            </button>
            <input type='checkbox' />
            <label htmlFor=''>In stock</label>
          </div>
        ))}
      </div>
    )
}

export default Products
