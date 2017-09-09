<template>
<div id="login">
  <img id="logo" src="./assets/klaus_logo.png">
  <div id="input">
  <md-input-container>
    <label>Benutzername</label>
    <md-input placeholder=""></md-input>
  </md-input-container>
    <md-input-container>
      <label>Passwort</label>
      <md-input type="password"></md-input>
    </md-input-container>
  </div>

  <md-button class="md-raised">Login</md-button>
  <label> © 2017 VS DER HDM STUTTGART Ι IMPRESSUM</label>
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
#logo {
  display: inline-block;

}


#input {
  margin-left: 30px;
  margin-right: 30px;
}
</style>
