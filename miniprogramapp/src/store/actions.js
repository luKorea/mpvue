import {RECEIVE_LIST, MOVIES_ARR} from './mutations-type'
import listData from '../datas/list-data'
export default {
  getList({commit}) {
    commit(RECEIVE_LIST, listData);
  },
  getMovies({commit}, data) {
    commit(MOVIES_ARR, data)
  }
}
