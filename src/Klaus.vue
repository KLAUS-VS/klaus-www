<template>
  <div>
    <navigation></navigation>
    <router-view id="content"></router-view>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
</script>

<style>
#content{
    margin: 0 15% 0 15%;
}

#loginbutton {
  margin-left: 30%;
  margin-right: 30%;
  background-color: #F39200;
}
</style>
