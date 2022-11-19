import { useMutation } from '@tanstack/react-query'
import { deleteProduct, updateProduct } from '../../api/productsAPI'

export const sortProducts = products => products.sort((a, b) => b.id - a.id)

export const createDeleteProductMutation = queryClient => {
  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      console.log('Product deleted successfully')
      queryClient.invalidateQueries('products')
    },
  })
}



export const createUpdateProductMutation = queryClient => {
  return useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      console.log('Product updated successfully')
      queryClient.invalidateQueries('products')
    },
  })
}
