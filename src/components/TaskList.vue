<!-- TaskList.vue -->

<template>
  <!-- Liste des tâches -->
  <div>
    <ul>
      <!-- Boucle sur chaque tâche -->
      <li v-for="(task, index) in tasks" :key="index">
        <!-- Case à cocher pour marquer la tâche comme complétée -->
        <label class="round-checkbox">
          <input type="checkbox" v-model="task.completed" />
          <div class="checkmark"></div>
        </label>
        <!-- Texte de la tâche -->
        <span :class="{ completed: task.completed }">{{ task.text }}</span>
        <!-- Composant TaskRemove pour supprimer la tâche -->
        <TaskRemove @remove="removeTask(index)" />
      </li>
    </ul>
  </div>
</template>

<script>
import TaskRemove from "./TaskRemove.vue";

export default {
  props: {
    // Propriété pour passer les tâches à afficher
    tasks: Array,
  },
  components: {
    // Composant TaskRemove utilisé pour chaque tâche
    TaskRemove,
  },
  methods: {
    // Méthode pour supprimer une tâche
    removeTask(index) {
      // Émet l'événement 'remove' avec l'index de la tâche à supprimer
      this.$emit("remove", index);
    },
  },
};
</script>

<style scoped>
/* Styles pour la liste des tâches */
.completed {
  text-decoration: line-through;
}
ul {
  padding: 0;
  list-style: none;
  gap: 1rem;
  display: flex;
  flex-direction: column;
}
li {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  background-color: rgb(65, 65, 65);
  border-radius: 0.6rem;
  padding: 0.5rem;
}
li span {
  min-height: 3rem;
  width: 20rem;
  text-align: start;
  display: flex;
  align-items: center;
}
input[type="checkbox"] {
  display: none;
}
li label {
  display: flex;
  align-items: center;
  min-height: 3rem;
}

/* Style du faux checkbox (rond) */
.round-checkbox .checkmark {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #ffffff;
  border: 3px solid #242424;
}

/* Style du faux checkbox lorsque le vrai checkbox est coché */
.round-checkbox input:checked + .checkmark {
  background-color: #242424;
}
</style>
