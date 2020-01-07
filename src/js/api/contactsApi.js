import { apiClient } from '../network/HttpClientFactory'

export default {
  getContacts (data) {
    const res = apiClient.get(`/contacts?pageno=${data.pageno}&pagesize=${data.pagesize}`)
    return res
  },

  getContact (no) {
    const res = apiClient.get(`/contacts/${no}`)
    return res
  },

  addContact (data) {
    const res = apiClient.post('/contacts', data)
    return res
  },

  deleteContact (no) {
    const res = apiClient.delete(`/contacts/${no}`)
    return res
  }
}
