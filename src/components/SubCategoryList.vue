<template>
  <div>
    <div :class="`text-xs-caption text-sm-subtitle-1`">
      {{ trimmedSubCategory(verses.subCategory) }}
    </div>
  </div>
</template>

<script>
import MemoryVerse from '@/components/MemoryVerse'

export default {
  name: 'SubCategoryList',

  component: {
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
