//axios
import axios from 'axios'
const configuredAxios = axios.create({
  headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') },
  baseURL: 'http://localhost:3030/'
})

export default configuredAxios
