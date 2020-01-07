import MutationTypes from '../../mutationTypes'
import contactsApi from '../../../api/contactsApi'

export default {
  getContacts: async ({ commit }, payload) => {
    await contactsApi.getContacts(payload).then((res) => commit(MutationTypes.SET_CONTACTS, res.data))
  },

  getContact: async ({ commit }, payload) => {
    await contactsApi.getContact(payload).then((res) => commit(MutationTypes.SET_CONTACT, res.data))
  },

  addContact: async ({ commit }, payload) => {
    const res = await contactsApi.addContact(payload).then((res) => {
      if (res.data.status === 'fail') {
        alert('오류가 발생했습니다.')
        return false
      } else {
        alert('성공적으로 추가되었습니다.')
        return true
      }
    })
    return res
  },

  deleteContact: async ({ commit }, no) => {
    await contactsApi.deleteContact(no).then((res) => console.log(`[DELETE STATUS] ${res}`))
  }
}
