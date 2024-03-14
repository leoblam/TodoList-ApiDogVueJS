<template>
  <form @submit.prevent="register" class="lr-form">
    <div class="form-group">
      <label for="username">Nom d'utilisateur :</label>
      <input
        type="text"
        id="username"
        v-model="username"
        placeholder="Entrez votre nom d'utilisateur ici"
        required
      />
    </div>
    <div class="form-group">
      <label for="email">Email :</label>
      <input
        type="email"
        id="email"
        v-model="email"
        placeholder="Entrez votre email ici"
        required
      />
    </div>
    <div class="form-group">
      <label for="password">Mot de passe :</label>
      <input
        type="password"
        id="password"
        v-model="password"
        placeholder="Entrez votre mot de passe ici"
        required
      />
    </div>
    <div class="form-group">
      <label for="password-confirm">Confirmation de mot de passe ::</label>
      <input
        type="password"
        id="password-confirm"
        v-model="password_confirmation"
        placeholder="Confirmez votre mot de passe ici"
        required
      />
    </div>
    <button type="submit" class="submit-button">Creer un compte</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      is_admin: null,
    };
  },
  methods: {
    register: function () {
      let data = {
        name: this.name,
        email: this.email,
        password: this.password,
        is_admin: this.is_admin,
      };

      this.$store
        .dispatch("register", data)
        .then(() => this.$router.push("/"))
        .catch((err) => console.log(err));
    },
  },
};
</script>
