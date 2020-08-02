<template>
  <v-container>
    <div :class="`text-caption text-sm-subtitle-1`" class="grey--text ">
      {{ trimmedSubCategory(verses.subCategory) }}
    </div>

    <v-row>
      <template v-for="(v, key) in verses.subCategoryVerses">
        <v-col :key="key" cols="8" xs="8" sm="6" md="4" lg="3">
          <MemoryVerse
            :category="category"
            :subCategory="verses.subCategory"
            :verse="v"
          />
        </v-col>
      </template>
    </v-row>

    <v-divider></v-divider>

    <br />
  </v-container>
</template>

<script>
import MemoryVerse from '@/components/MemoryVerse'

export default {
  name: 'SubCategoryList',

  components: {
    MemoryVerse,
  },

  props: ['category', 'verses'],

  methods: {
    trimmedSubCategory: function(subcategory) {
      return subcategory.replace(/_/g, ' ').replace(/\w\./i, '')
    },
  },
}
</script>
