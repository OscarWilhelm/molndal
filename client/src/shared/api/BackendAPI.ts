import Axios from 'axios'

const developmentURL = 'http://localhost:3001'
const productionURL = ''

const BackendAPI = Axios.create({
  baseURL: developmentURL
})

export default BackendAPI
