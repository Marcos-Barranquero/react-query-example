import { useQueryClient } from '@tanstack/react-query'
import { createAddProductMutation, handleSubmit } from './createProductLogic'

function CreateProductForm() {
  const queryClient = useQueryClient()
  const addProductMutation = createAddProductMutation(queryClient)

  return (
    <form onSubmit={e => handleSubmit(e, addProductMutation)}>
      <label htmlFor='name'>Name</label>
      <input type='text' name='name' id='name' />

      <label htmlFor='description'>Description</label>
      <input type='text' name='description' id='description' />

      <label htmlFor='price'>Price</label>
      <input type='number' name='price' id='price' />

      <button type='submit'>Add product</button>
    </form>
  )
}
export default CreateProductForm
