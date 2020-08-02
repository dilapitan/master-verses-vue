<template>
  <v-container>
    <div :class="`text-overline text-sm-button`">
      {{ category }}
    </div>

    <br />

    <template v-for="(sv, key) in sortedVerses">
      <SubCategoryList :key="key" :category="category" :verses="sv" />
    </template>
  </v-container>
</template>

<script>
import SubCategoryList from '@/components/SubCategoryList'

export default {
  name: 'CategoryList',

  components: {
    SubCategoryList,
  },

  props: ['cv', 'category'],

  data: () => ({
    verses: null,
    sortedVerses: [],
  }),

  created() {
    this.setup()
  },

  methods: {
    setup: function() {
      this.verses = { ...this.cv }
      delete this.verses.category

      this.sortedVerses = Object.keys(this.verses)
        .sort()
        .map((key) => {
          return { subCategory: key, subCategoryVerses: this.verses[key] }
        })
    },
  },
}
</script>
