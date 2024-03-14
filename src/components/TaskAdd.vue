<!-- TaskAdd.vue -->

<template>
  <!-- Titre de la section -->
  <h2>Liste de tâches</h2>
  <!-- Formulaire d'ajout de tâche -->
  <div class="input_bloc">
    <input autofocus v-model="newTask" placeholder="Nouvelle tâche" />
    <!-- Bouton pour ajouter la tâche -->
    <button class="create_button" @click="addTask">Ajouter</button>
  </div>
  <!-- Message d'erreur pour une valeur vide -->
  <p
    v-if="showErrorEmptyValue !== 0"
    :class="{
      'fade-in': showErrorEmptyValue === 1,
      'fade-out': showErrorEmptyValue === 2,
    }"
  >
    Merci d'écrire une tâche afin de l'ajouter à votre liste.
  </p>
</template>

<script>
export default {
  data() {
    return {
      // Variable pour stocker le contenu de la nouvelle tâche
      newTask: "",
      // Variable pour contrôler l'affichage du message d'erreur
      showErrorEmptyValue: 0,
    };
  },
  methods: {
    // Méthode pour gérer la transition d'affichage du message d'erreur
    async startTransition() {
      // Affiche le message d'erreur avec une transition fade-in
      this.showErrorEmptyValue = 1;
      // Attend 2 secondes avant de passer à l'étape suivante
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // Cache le message d'erreur avec une transition fade-out
      this.showErrorEmptyValue = 2;
      // Attend 0.5 seconde avant de réinitialiser la variable
      await new Promise((resolve) => setTimeout(resolve, 500));
      this.showErrorEmptyValue = 0;
    },
    // Method to add a task
    addTask() {
      if (this.newTask.trim() !== "") {
        // Emit an event to the parent component with the new task
        this.$emit("add-task", this.newTask.trim());
        // Clear the input field
        this.newTask = "";
      } else {
        // Start the error message transition
        this.startTransition();
      }
    },
  },
};
</script>

<style>
/* Styles pour le formulaire d'ajout de tâche */
.input_bloc {
  display: flex;
  justify-content: space-between;
}
.input_bloc input {
  border-radius: 0.5rem;
  border: none;
  padding: 1rem;
}
.input_bloc input {
  width: 72%;
}
/* Styles pour la transition fade-in/fade-out du message d'erreur */
.fade-in {
  animation-name: fadeInOpacity;
  opacity: 1;
  animation-duration: 0.5s;
}
.fade-out {
  opacity: 0;
  animation-name: fadeOutOpacity;
  animation-duration: 0.5s;
}

@keyframes fadeInOpacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeOutOpacity {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
