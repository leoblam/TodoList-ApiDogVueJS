<!-- TaskRemove.vue -->

<template>
  <!-- Bouton pour supprimer une tâche -->
  <button class="delete_button" @click="removeTask">Supprimer</button>
</template>

<script>
export default {
  methods: {
    // Méthode pour supprimer une tâche
    removeTask() {
      // Émet l'événement 'remove'
      this.$emit("remove");
    },
  },
};
</script>
