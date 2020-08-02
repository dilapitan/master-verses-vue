<template>
  <div>
    <v-row>
      <p class="text-caption mt-2">{{ verse.number }}.</p>
      <v-btn
        @click="openDialog()"
        class="font-weight-bold"
        color="primary"
        text
        >{{ verse.verse }}</v-btn
      >
    </v-row>

    <v-dialog v-model="dialog" width="400">
      <v-card>
        <v-card-title>
          {{ category }}
        </v-card-title>

        <v-card-text>
          <p class="font-italic">
            {{ trimmedSubCategory(subCategory) }}
          </p>
          <p>
            <span class="mr-3">{{ verse.number }}.</span>
            <span class="primary--text font-weight-bold">{{
              verse.verse
            }}</span>
          </p>

          <p>
            {{ verse.verseBody }}
          </p>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'MemoryVerse',

  props: ['category', 'verse', 'subCategory'],

  data: () => ({
    dialog: false,
  }),

  methods: {
    openDialog: function() {
      this.dialog = true
    },

    trimmedSubCategory: function(subcategory) {
      return subcategory.replace(/_/g, ' ').replace(/\w\./i, '')
    },
  },
}
</script>
