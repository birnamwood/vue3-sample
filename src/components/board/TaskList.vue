<script setup>
import { useStore } from 'vuex'

const store = useStore()
const tasks = store.state.tasks

</script>

<template>
  <div v-for="task in tasks" :key="task" class="task">
    <span>
      {{task.title}}
    </span>
  </div>
</template>

<style scoped>
.task {
  height: 40px;
  margin: auto;
  border: 1px solid;

}
</style>