<script setup>
import TaskCreate from '@/components/board/TaskCreate.vue'
import TaskList from '@/components/board/TaskList.vue'

</script>

<template>
    <router-link to="/">Home</router-link>
  <h4>タスク</h4>

  <TaskCreate/>
  <TaskList/>
</template>
