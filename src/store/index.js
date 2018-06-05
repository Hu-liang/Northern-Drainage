import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)


const state = {
	isLoading: false,
	direction: 'forward'
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations: {
		UPDATE_LOADING(state, status) {
			state.isLoading = status
		},
		UPDATE_DIRECTION(state, direction) {
			state.direction = direction
		}
	}
})
