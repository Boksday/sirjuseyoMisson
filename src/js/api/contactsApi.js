import { apiClient } from '@/js/network/HttpClientFactory'

export default {
  getContacts (data) {
    const res = apiClient.get(`/contacts?pageno=${data.pageNo}&pagesize=${data.pageSize}`)
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
