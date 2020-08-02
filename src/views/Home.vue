<template>
  <v-container fluid>
    <div :class="`text-xs-caption text-sm-h4`">
      List of Memory Verses
    </div>

    <br />

    <v-row>
      <v-col cols="9" xs="9" sm="3">
        <v-select
          v-model="category"
          label="Select Category"
          :items="categories"
        ></v-select>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <template v-for="cv in categorizedVerses">
          <CategoryList :key="cv.category" :cv="cv" />
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CategoryList from '@/components/CategoryList'

export default {
  name: 'Home',

  components: {
    CategoryList,
  },

  props: ['verses'],

  data: () => ({
    category: 'All',
    categories: [
      'All',
      'A. Christ – the Source',
      'B. Abundant Resources',
      'C. Maturity Needs',
      'D. Godly Character',
      'E. Ministry Basics',
      'F. Kingdom Commitments',
      'G. Circles of Influence',
    ],
  }),

  computed: {
    categorizedVerses: function() {
      if (this.category === 'All') return this.verses
      const sorted = this.verses.filter((categorizedVerses) => {
        return categorizedVerses.category === this.category
      })

      return sorted
    },
  },
}
</script>
