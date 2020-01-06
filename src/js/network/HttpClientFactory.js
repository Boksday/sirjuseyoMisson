import axios from 'axios'

const config = {
  // Sample URL
  baseURL: 'http://sample.bmaster.kro.kr'
}

export const apiClient = axios.create(config)
