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

  <md-button id="loginbutton" class="md-raised md-warn" @click="login()">Login</md-button>
  <br>
  <label id="footertext"> © 2017 VS DER HDM STUTTGART Ι <a href="http://localhost:8080/#/Impressum">IMPRESSUM</a></label>
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

<style scoped>
#login {
}
#logo {
  display: inline-block;
  margin: auto;
  margin-top: 20vh;
  display: flex;
  align-items: center;
}


#input {
  margin: 0 15% 0 15%;
  margin-left: 30%;
  margin-right: 30%;
}

#loginbutton {
  margin-left: 30%;
  margin-right: 30%;
  background-color: #F39200;
}


#footertext {
  margin-left: 80%;
  margin-top: 30vh;

}
</style>
