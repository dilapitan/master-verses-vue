<template>
  <v-container fluid>
    <div :class="`text-xs-caption text-sm-h4`">
      About: What's this and Why
    </div>

    <br />

    <p>
      This is a web app that mimics the use of
      <strong>Flash Cards</strong> using <strong>LAMP 2</strong> verses.

      <br />
      <br />

      I made this app because I'm having problems locating the LAMP 2 PDF file
      in my phone and sometimes my phone lags, and the app I use for opening a
      PDF sometimes crashes and has problems.

      <br />
      <br />

      I build this app using
      <span>
        <v-btn
          class="primary--text"
          text
          href="https://vuejs.org/"
          target="_blank"
          >Vue</v-btn
        >
      </span>

      and
      <span>
        <v-btn
          class="primary--text"
          text
          href=" https://firebase.google.com/"
          target="_blank"
          >Firebase/Firestore</v-btn
        >
      </span>

      but originally I almost finished building it using React, Material-UI, and
      Firebase/Firestore but I got a bit tired of using that stack, and I really
      want to build this app already, so I stick with my main goto Front-end
      framework: Vue.

      <br /><br />

      I used Firebase to easily have a serverless backend and also want to
      deploy this app there also.

      <br /><br />

      I hope this can help others who are trying to memorize LAMP 2 verses too!

      <br /><br />

      <v-btn
        class="primary--text"
        text
        href="https://github.com/dilapitan"
        target="_blank"
        >~ Dominic Inoceno Lapitan</v-btn
      >

      <br /><br />

      <span class="font-italic">Soli Deo Gloria!</span>
    </p>
  </v-container>
</template>
