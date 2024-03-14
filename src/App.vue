<template>
  <div style="display: flex; gap: 10rem">
    <div>
      <TaskAdd @add-task="addTask" />
      <TaskList :tasks="tasks" @remove="removeTask" />
    </div>
    <APIDoggoVue />
  </div>
</template>

<script>
import APIDoggoVue from "./components/APIDoggo.vue";
import TaskAdd from "./components/TaskAdd.vue";
import TaskList from "./components/TaskList.vue";

export default {
  data() {
    return {
      tasks: [],
    };
  },
  components: {
    TaskAdd,
    TaskList,
    APIDoggoVue,
  },
  methods: {
    addTask(task) {
      this.tasks.push({ text: task, completed: false });
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
  },
};
</script>
