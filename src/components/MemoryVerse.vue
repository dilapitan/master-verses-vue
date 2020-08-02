<template>
  <div>
    <v-btn class="font-weight-bold" color="primary" text>{{
      verse.verse
    }}</v-btn>
  </div>
</template>

<script>
export default {
  name: 'MemoryVerse',

  props: ['verse', 'subCategory'],
}
</script>
