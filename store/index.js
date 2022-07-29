import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export const state = () => ({
  openCreateModal: false,
})

export default {
  getters,
  state,
  mutations,
  actions,
}