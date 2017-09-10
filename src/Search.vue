<template>
<main id="search">
  <div class="title-container">
    <h1 class="md-title title">Nach Klausuren suchen</h1>
  </div>
  <div class="content">
    <p>Hier kannst du frei nach Dozenten, Vorlesungen oder EDV-Nummern suchen.</p>

    <md-input-container>
      <label>Suche</label>
      <md-input v-model="autocompleteValue"></md-input>
    </md-input-container>

    <md-button class="md-icon-button md-raised md-primary">
      <md-icon>info</md-icon>
      <md-tooltip md-direction="top">My tooltip</md-tooltip>
    </md-button>

    <md-button class="md-raised">Suchen</md-button>
  </div>
</main>
</template>

<style>
</style>
