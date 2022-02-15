import { createStore } from 'vuex'

const savedTasks = localStorage.getItem('tasks')

const store = createStore({
  state: {
    tasks: savedTasks ? JSON.parse(savedTasks): []
  },
  getters: {
  },
  mutations: {
    createTask(state, payload) {
      state.tasks.push( {title: payload.title})
    }
  },
  actions: {
    createTask(context, payload) {
      console.log('set')
      context.commit('createTask', payload)
    }
  },
  modules: {
  }
})
store.subscribe((mutation, state) => {
  console.log(state.tasks)
  localStorage.setItem('tasks', JSON.stringify(state.tasks))
})

export default store