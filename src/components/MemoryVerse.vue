<template>
  <div>Verse under {{ subCategory }}</div>
</template>

<script>
export default {
  name: 'MemoryVerse',

  props: ['verse', 'subCategory'],
}
</script>
