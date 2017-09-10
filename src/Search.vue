<template>
<main id="search">
  <div class="title-container">
    <h1 class="md-title title">Nach Klausuren suchen</h1>
  </div>
  <div id="textsearch"class="md-body-1 content">
    <p>Hier kannst du frei nach Dozenten, Vorlesungen oder EDV-Nummern suchen.</p>

    <md-input-container id="searchfield" md-theme="gray">
      <label>Suche</label>
      <md-input v-model="autocompleteValue"></md-input>
        <md-icon id="infoicon">info</md-icon>
        <b-tooltip target="infoicon" placement="right" title="Online!">
          <br>
<p>Suche verfeinern</p>
<p>- ein "+" direkt vor einem Suchbegriff gibt diesem eine höhere Gewichtung</p>
<p>- ein "-" direkt vor einem Suchbegriff schließt alle Ergebnisse aus, die diesen Suchbegriff enthalten. </p>
</b-tooltip>
    </md-input-container>



<md-button id="button" class="md-raised md-warn">Suchen</md-button>
<br>
<span id="headline" class="md-headline">Filtern nach:</span>
<br>
<md-button id="button" class="md-raised md-warn">Filtern</md-button>
</div>
</main>
</template>

<style scoped lang="scss">
#searchfield {
  max-width: 625px;
  .md-icon{
    color: rgb(0, 161, 154);
  }
}


.tooltip-inner {
    background-color: #73AD21;
    color: #FFFFFF;
    border: 1px solid green;
    padding: 15px;
    font-size: 20px;
}
#headline {
  margin-top: 40px;
}

</style>
