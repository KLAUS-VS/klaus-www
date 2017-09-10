<template>
<div>
  <header>
    <img src="./assets/klaus_logo.png" id="logo"></img>
  </header>
  <b-nav>
    <b-nav-item to="Klaus">
      Klausurensuche
      <div v-show="$route.path==='/Klaus'" class="triangle"></div>
    </b-nav-item>
    <b-nav-item to="Upload">
      Upload
      <div v-show="$route.path==='/Upload'" class="triangle"></div>
    </b-nav-item>
  </b-nav>
</div>
</template>

<script>
</script>

<style scoped lang="scss">
.nav {
  margin-bottom: 10px;
  padding: 0 15% 0 15%;
  margin:0;
  text-align: right;
  justify-content: flex-end;
}

.nav-item {
  font-weight: bold;
  font-size: 20px;
  margin: 0;
  a {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    color: black;
    padding: 0;
    margin: 0 20px 0 20px;
  }
  a:hover{
      text-decoration: none;
  }
}

.triangle{
  width: 0;
  height: 0;
  border-top: transparent 5px;
  border-left: transparent 10px;
  border-right: transparent 10px;
  border-bottom: rgb(255, 204, 0) 10px;
  border-style: solid;
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
