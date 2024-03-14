<template>
  <div style="display: flex; flex-direction: column; gap: 0.5rem">
    <input v-model="nom1" type="text" />
    <input v-model="nom2" type="text" />
    <input v-model="nom3" type="text" />

    <div style="display: flex; flex-direction: row; gap: 0.5rem">
      <input
        @focus="$event.target.select()"
        type="checkbox"
        id="nom1"
        :value="nom1"
        v-model="checkedNames"
      />
      <label for="nom1">{{ nom1 }}</label>
      <input type="checkbox" id="nom2" :value="nom2" v-model="checkedNames" />
      <label for="nom2">{{ nom2 }}</label>
      <input type="checkbox" id="nom3" :value="nom3" v-model="checkedNames" />
      <label for="nom3">{{ nom3 }}</label>
    </div>
    <span>Noms cochés : {{ checkedNames }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nom1: "Nom1",
      nom2: "Nom2",
      nom3: "Nom3",
      checkedNames: [],
    };
  },
};
</script>
