<template>
  <div id="footer">
    <label>2017 VS Der HDM Stuttgart | <router-link :to="{ name: 'impressum' }">Impressum</router-link></label>
  </div>
</template>

<style scoped lang="scss">
  #footer{
    display: flex;
    width: 100%;
    height: 26px;
    justify-content: flex-end;
    padding: 0 15% 0 15%;
    color: white;
    background-color: #3d3d3c;
    height: 100px;


    label{
      align-self: center;
      color: white;
    }
    a{
      color: white;

    }

  }
  
</style>
