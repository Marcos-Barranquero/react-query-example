export const addProductMutation = useMutation({
  mutationFn: createProduct,
  onSuccess: () => {
    console.log('Product added successfully')
    queryClient.invalidateQueries('products')
  },
})
