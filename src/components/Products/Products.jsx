import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getProducts } from '../../api/productsAPI'
import Product from './Product'
import { createDeleteProductMutation, createUpdateProductMutation, sortProducts } from './ProductsLogic'

function Products() {
  const { isLoading, data: products, isError, error } = useQuery({ queryKey: ['products'], queryFn: getProducts, select: sortProducts })

  const queryClient = useQueryClient()

  const deleteProductMutation = createDeleteProductMutation(queryClient)

  const deleteClickHandler = product => deleteProductMutation.mutate(product)

  const updateProductMutation = createUpdateProductMutation(queryClient)

  const updateClickHandler = (e, product) => updateProductMutation.mutate({ ...product, inStock: e.target.checked })

  if (isLoading) return <div>Loading...</div>
  else if (isError) return <div>Error: {error.message}</div>
  else
    return (
      <div>
        {products.map(product => (
          <div key={product.id}>
            <Product {...product} />
            <button onClick={() => deleteClickHandler(product)}>Delete</button>
            <input type='checkbox' id={product.id} checked={product.inStock} onChange={e => updateClickHandler(e, product)} />
            <label htmlFor={product.id}>In stock</label>
          </div>
        ))}
      </div>
    )
}

export default Products
