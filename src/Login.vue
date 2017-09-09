<template>
  <div>
     <b-form-input size="lg" type="text" placeholder="HdM Kürzel"></b-form-input>
     <b-form-input size="lg" type="text" placeholder="Passwort"></b-form-input>
<md-button class="md-raised">Default</md-button>
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
