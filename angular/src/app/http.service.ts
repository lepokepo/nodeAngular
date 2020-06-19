//axios
import axios from 'axios'
const configuredAxios = axios.create({
  baseURL: 'http://localhost:3030/',
  headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
})

export default configuredAxios
