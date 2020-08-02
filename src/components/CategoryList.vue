<template>
  <div>
    <template v-for="(sv, key) in sortedVerses">
      <SubCategoryList :key="key" :verses="sv" />
    </template>
  </div>
</template>

<script>
import SubCategoryList from '@/components/SubCategoryList'

export default {
  name: 'CategoryList',

  components: {
    SubCategoryList,
  },

  props: ['cv'],

  data: () => ({
    verses: null,
    sortedVerses: [],
  }),

  created() {
    this.verses = { ...this.cv }
    delete this.verses.category

    this.sortedVerses = Object.keys(this.verses)
      .sort()
      .map((key) => {
        return { subCategory: key, subCategoryVerses: this.verses[key] }
      })
  },
}
</script>
