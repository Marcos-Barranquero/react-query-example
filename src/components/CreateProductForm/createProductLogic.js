import { useMutation } from '@tanstack/react-query'
import { createProduct } from '../../api/productsAPI'

export const createAddProductMutation = queryClient => {
  return useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      console.log('Product added successfully')
      queryClient.invalidateQueries('products')
    },
  })
}

export const handleSubmit = (e, addProductMutation) => {
  e.preventDefault()
  console.log('You clicked submit.')
  const formData = new FormData(e.target)
  const values = Object.fromEntries(formData)
  addProductMutation.mutate(values)
}
