import { useMutation } from '@tanstack/react-query'
import { deleteProduct, updateProduct } from '../../api/productsAPI'

export const sortProducts = products => products.sort((a, b) => b.id - a.id)

export const createDeleteProductMutation = queryClient => {
  const deleteProductMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      console.log('Product deleted successfully')
      queryClient.invalidateQueries('products')
    },
  })
  return deleteProductMutation
}

export const createUpdateProductMutation = queryClient => {
  const updateProductMutation = useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      console.log('Product updated successfully')
      queryClient.invalidateQueries('products')
    },
  })
  return updateProductMutation
}
