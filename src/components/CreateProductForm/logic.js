export const handleSubmit = (e, addProductMutation) => {
  e.preventDefault()
  console.log('You clicked submit.')
  const formData = new FormData(e.target)
  const values = Object.fromEntries(formData)
  addProductMutation.mutate(values)
}
