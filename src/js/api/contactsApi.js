import { apiClient } from '../network/HttpClientFactory'

export default {
  getContacts () {
    const res = apiClient.get('/contacts')
    return res
  },

  getOneContact (no) {
    const res = apiClient.get('/contacts/' + no)
    return res
  },

  addContact (data) {
    const res = apiClient.post('/contacts', data)
    return res
  },

  deleteContact (no) {
    const res = apiClient.delete('/contacts/' + no)
    return res
  }
}
