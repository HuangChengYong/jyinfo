import { SET_AUTHENTICATED, SET_USER,SET_id,SET_name,SET_avatar} from "./mutation-type";

export default {
    setAuthenticated({ commit }, isAuthenticated) {
        commit(SET_AUTHENTICATED, {isAuthenticated});
    },
    setUSER({ commit }, user) {
        commit(SET_USER, {user})
    },
    createUser: ({ commit }) => {
        commit(SET_AUTHENTICATED, false)
        // commit(SET_USER, null)
    },
  SET_id({ commit }, id) {
    commit(SET_id, {id})
  },
  SET_name({ commit }, name) {
    commit(SET_name, {name})
  },
  SET_avatar({ commit }, avatar) {
    commit(SET_avatar, {avatar})
  },
}
