<template>
<div>
  <header>
    <img src="./assets/klaus_logo.png" id="logo"></img>
  </header>
  <b-nav>
    <b-nav-item>Klausurensuche</b-nav-item>
    <b-nav-item to="Upload">Upload</b-nav-item>
  </b-nav>
</div>
</template>

<script>
</script>

<style scoped lang="scss">
.nav {
  margin-bottom: 10px;
  padding: 0 15% 0 15%;
  text-align: right;
  justify-content: flex-end;
}

.nav-item {
  font-weight: bold;
  font-size: 20px;
  margin: 0;
  a {
    color: black;
  }
}

header {
  width: 100%;
}

#logo {
  height: 145px;
  margin-left: 11%;
  margin-top: 20px;
}
</style>
