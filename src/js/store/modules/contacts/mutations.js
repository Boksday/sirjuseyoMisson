
import MUTATION_TYPES from '../../mutationTypes'

export default {
  [MUTATION_TYPES.SET_CONTACTS]: (state, payload) => {
    state.contacts = payload
  },

  [MUTATION_TYPES.SET_CONTACT]: (state, newContact) => {
    state.contact = newContact
  }
}
