<template>
  <div>
    <v-row>
      <v-col cols="9" xs="9" sm="3">
        <v-select
          v-model="category"
          label="Select Category"
          :items="categories"
        ></v-select>
      </v-col>
    </v-row>

    <v-row v-if="page === 'home'">
      <v-col>
        <template v-for="cv in categorizedVerses">
          <CategoryList :key="cv.category" :category="cv.category" :cv="cv" />
        </template>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CategoryList from '@/components/CategoryList'

export default {
  name: 'DataContainer',

  components: {
    CategoryList
  },

  props: ['page', 'verses'],

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
      'G. Circles of Influence'
    ]
  }),

  computed: {
    categorizedVerses: function() {
      if (this.category === 'All') return this.verses
      const sorted = this.verses.filter((categorizedVerses) => {
        return categorizedVerses.category === this.category
      })

      return sorted
    }
  }
}
</script>
