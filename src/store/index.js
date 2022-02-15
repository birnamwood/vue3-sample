import { createStore } from 'vuex'

const savedSections = localStorage.getItem('board-sections')

const store = createStore({
  state: {
    sections: savedSections ? JSON.parse(savedSections): []
  },
  getters: {
  },
  mutations: {
    ceateSection(state, payload) {
      state.sections.push( {title: payload.title, tasks:[]})
    }
  },
  actions: {
    ceateSection(context, payload) {
      context.commit('createSection', payload)
    }
  },
  modules: {
  }
})
store.subscribe((mutation, state) => {
  localStorage.setItem('board-sections', JSON.stringify(state.sections))
})

export default store