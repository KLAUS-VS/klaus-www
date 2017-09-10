<template>
  <main id="upload">
  <div class="title-container">
    <h1 class="md-title title">Klausur hochladen</h1>
  </div>
<div class="content">
  <p class="md-body-1">
    Hier kannst Du Deine bereits im PDF-Format vorliegenden Klausuren hochladen. Falls in dem Dokument auch Lösungen stehen oder es womöglich die Originalklausur vom Professor ist, einfach die entsprechenden Punkte ankreuzen. Vielleicht gibt es etwas besonderes
    an Deinem PDF, zum Beispiel glaubst Du, dass die Klausur im nächsten Semester sehr ähnlich aussehen wird, dann trage das einfach im Kommentarfeld ein. Der nächste Student, der die Klausur runterlädt, freut sich über Deinen Tip.
  </p>
  <p class="md-body-2">
    Bitte schau zuerst nach, ob die Klausur, die Du hochladen möchtest, nicht vielleicht schon vorhanden ist!
  </p>
  <form>
    <md-input-container md-theme="gray">
    <label>Fach</label>
    <md-input v-model="initialValue"></md-input>
    </md-input-container>
    <md-input-container md-theme="gray">
    <label>Dozent</label>
    <md-input v-model="initialValue"></md-input>
    </md-input-container>
    <md-input-container md-theme="gray">
    <label>Semester</label>
    <md-input v-model="initialValue"></md-input>
    </md-input-container>

    <md-checkbox class="md-warn" id="solutions" name="solutions" v-model="checkbox">inkl. Lösungen</md-checkbox>
    <md-checkbox class="md-warn" id="original" name="original" v-model="checkbox">inkl. Originalfragen</md-checkbox>

    <md-input-container md-theme="gray">
    <label>Kommentar</label>
    <md-input v-model="initialValue"></md-input>
    </md-input-container>
  </form>
</div>
</main>
</template>
