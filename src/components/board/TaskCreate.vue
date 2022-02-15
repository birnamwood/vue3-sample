<script setup>
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex'
import { ref } from "vue"

let title = ref('')

const store = useStore()

const createTask = computed(() => {
  store.dispatch('createTask', {title: title, finished: false})
  title = ""
})

</script>

<template>
  <form @submit="createTask">
    <input v-model="title" type="text" placeholder="title">
    <button type="submit" :disabled="title.length == 0">Add</button>
  </form>
</template>