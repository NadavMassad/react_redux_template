import { MY_SERVER } from '../env'
import axios from 'axios'

//// GET ////
export const getPhones = () => {
  console.log('GET')
  return new Promise((resolve) =>
    axios.get(MY_SERVER).then(res => resolve({ data: res.data }))
  )
}

//// POST ////
export const addPhones = (phone) => {
  console.log('POST')
  console.log(phone.brand)
  return new Promise((resolve) =>
    axios.post(MY_SERVER, {
      brand: phone.brand,
      color: phone.color,
      price: phone.price
    }).then(res => resolve({ data: res.data })))
}

//// DELETE ////
export const delPhones = (id) => {
  console.log('DELETE')
  return new Promise((resolve) =>
    axios.delete(MY_SERVER + id).then(res => resolve({ data: id })))
}
//// PUT ////
export const updPhones = (phone) => {
  console.log('UPDATE')
  console.log(phone)
  return new Promise((resolve) =>
    axios.put(MY_SERVER + phone.id, {
      brand: phone.brand,
      color: phone.color,
      price: phone.price
    }).then(res => resolve({ data: res.data })))
}
