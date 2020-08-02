<template>
  <div>
    <div :class="`text-caption text-sm-subtitle-1`">
      {{ trimmedSubCategory(verses.subCategory) }}
    </div>

    <v-row>
      <template v-for="v in verses">
        <v-col :key="v.number" cols="8" xs="8" sm="6" md="4" lg="3">
          <MemoryVerse :verse="v" />
        </v-col>
      </template>
    </v-row>

    <v-divider></v-divider>

    <br />
  </div>
</template>

<script>
import MemoryVerse from '@/components/MemoryVerse'

export default {
  name: 'SubCategoryList',

  components: {
    MemoryVerse,
  },

  props: ['verses'],

  methods: {
    trimmedSubCategory(subcategory) {
      return subcategory.replace(/_/g, ' ').replace(/\w\./i, '')
    },
  },
}
</script>
