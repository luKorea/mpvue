import {MOVIES_ARR, RECEIVE_LIST} from './mutations-type'

export default {
  [RECEIVE_LIST](state, {list_data}) {
    state.list = list_data
  },
  [MOVIES_ARR](state, data) {
    state.movies = data
  }
}
