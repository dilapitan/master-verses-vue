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

    <template v-if="page === 'home'">
      <v-row>
        <v-col>
          <template v-for="cv in categorizedVerses">
            <CategoryList :key="cv.category" :category="cv.category" :cv="cv" />
          </template>
        </v-col>
      </v-row>
    </template>

    <template v-else>
      <div>
        <br />
        <v-btn color="primary" :loading="isLoading" @click="randomize()"
          >Randomize</v-btn
        >
      </div>

      <br /><br />
      <v-row v-if="verse">
        <v-col cols="2" xs="2" sm="1">
          <v-icon color="warning" x-large>mdi-fire</v-icon>
        </v-col>
        <v-col cols="10" xs="10" sm="10" class="mt-1">
          <MemoryVerse
            :category="randomizedCategoryLabel"
            :verse="verse"
            :subCategory="subCategory"
          />
        </v-col>
      </v-row>
    </template>
  </div>
</template>

<script>
export default {
  name: 'DataContainer',

  components: {
    CategoryList: () =>
      import(
        /* webpackChunkName: "CategoryList" */ '@/components/CategoryList'
      ),
    MemoryVerse: () =>
      import(/* webpackChunkName: "MemoryVerse" */ '@/components/MemoryVerse')
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
    ],
    isLoading: false,
    randomizedCategoryLabel: null,
    subCategory: null,
    verse: null
  }),

  computed: {
    categorizedVerses: function() {
      if (this.category === 'All') return this.verses

      const sorted = this.verses.filter((categorizedVerses) => {
        return categorizedVerses.category === this.category
      })

      return sorted
    }
  },

  watch: {
    category: function() {
      this.verse = null
    }
  },

  methods: {
    randomize: function() {
      this.isLoading = true

      /**
       * This is to remove 'All', for Category labeling
       */
      const localCategoriesLabels = [...this.categories]
      const localCategories = [...this.categorizedVerses]
      localCategoriesLabels.shift()

      /**
       * Getting a random index to be used for randomizing a category
       * and getting the category label but deleting first the
       * 'category' prop before randomizing for sub
       * categories since 'category' is not a
       * subcategory
       */
      const randomCategoryIndex = Math.floor(
        Math.random() * localCategories.length
      )

      this.randomizedCategoryLabel = localCategoriesLabels[randomCategoryIndex]

      const randomCategory = localCategories[randomCategoryIndex]

      const randomCategoryKeys = Object.keys(randomCategory)

      // Removing 'category' prop
      const adjustedRandomCategoryKeys = randomCategoryKeys.filter(
        (randomCategoryKeys) => randomCategoryKeys !== 'category'
      )

      const randomSubCategoryLabel =
        adjustedRandomCategoryKeys[
          (adjustedRandomCategoryKeys.length * Math.random()) << 0
        ]

      const randomSubCategory = randomCategory[randomSubCategoryLabel]
      this.subCategory = randomSubCategoryLabel

      const randomVerse =
        randomSubCategory[Math.floor(Math.random() * randomSubCategory.length)]

      this.verse = randomVerse

      this.isLoading = false
    }
  }
}
</script>

<style scoped>
#recite {
  cursor: default;
}
</style>
