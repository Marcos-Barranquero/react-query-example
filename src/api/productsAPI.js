import axios from 'axios'

const productApi = axios.create({
  baseURL: 'http://localhost:3000',
})

export const getProducts = async () => {
  const response = await productApi.get('/products')
  return response.data
}