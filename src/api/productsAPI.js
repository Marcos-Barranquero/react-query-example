import axios from 'axios'

const productApi = axios.create({
  baseURL: 'http://localhost:3000',
})

export const getProducts = async () => {
  const response = await productApi.get('/products')
  return response.data
}

export const createProduct = product => productApi.post('/products', { ...product, inStock: true })
export const deleteProduct = product => productApi.delete(`/products/${product.id}`)
export const updateProduct = product => productApi.put(`/products/${product.id}`, product)