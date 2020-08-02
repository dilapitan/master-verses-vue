<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item to="/">
          <v-list-item-action>
            <v-icon>mdi-card-text</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Memory Verses</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/randomize">
          <v-list-item-action>
            <v-icon>mdi-creation</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Randomize</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/about">
          <v-list-item-action>
            <v-icon>mdi-pizza</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-github</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Source Code</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>
        <br />
        <v-list-item>
          <v-switch inset v-model="$vuetify.theme.dark"></v-switch>
          <v-icon v-if="!$vuetify.theme.dark">mdi-lightbulb-on-outline</v-icon>
          <v-icon v-else>mdi-lightbulb-outline</v-icon>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <strong>Master Verses</strong>
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view :verses="verses"></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { getVerses } from '@/services/FirestoreService'

export default {
  data: () => ({
    drawer: null,
    verses: [],
  }),

  created() {
    this.setVerses()
  },

  methods: {
    setVerses: function() {
      getVerses()
        .then((querySnapshot) => {
          querySnapshot.docs.forEach((doc) => {
            this.verses.push(doc.data())
          })
        })
        .catch((error) => console.log(error))
    },
  },
}
</script>
