<template>
  <div>
    <header>
      <img src="./assets/klaus_logo.png" id="logo"></img>
    </header>
    <b-nav>
      <b-nav-item active>fooo</b-nav-item>
      <b-nav-item>Klausurensuche</b-nav-item>
      <b-nav-item>Upload</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
</script>

<style scoped>
  .nav{
    padding: 0 15% 0 15%;
    text-align: right;
    justify-content: flex-end;
  }

  .nav-item{
    padding: 0 0 32px 0;
    margin: 0;
  }

header{
  width: 100%;
  padding: 0 15% 0 15%
}

  #logo{
    height: 145px;
  }

  .nav-item:active {
	position: relative;
	background: #88b7d5;
	border: 4px solid #c2e1f5;
}
.arrow_box:after, .arrow_box:before {
	top: 100%;
	left: 50%;
	border: solid transparent;
	content: " ";
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
}

.arrow_box:after {
	border-color: rgba(136, 183, 213, 0);
	border-top-color: #88b7d5;
	border-width: 30px;
	margin-left: -30px;
}
.arrow_box:before {
	border-color: rgba(194, 225, 245, 0);
	border-top-color: #c2e1f5;
	border-width: 36px;
	margin-left: -36px;
}
</style>
