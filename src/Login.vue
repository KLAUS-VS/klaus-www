<template>
<div>
  <h1>Hallo</h1>
  <button @click="login()">Click</button>
</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    login() {
      this.$router.push({
        name: 'klaus',
      });
    },
  },
};
</script>

<style>
</style>
