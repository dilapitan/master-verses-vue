<template>
  <v-container fluid>
    <div :class="`text-h6 text-sm-h4`">
      List of Memory Verses
    </div>

    <br />

    <DataContainer :verses="verses" />
  </v-container>
</template>

<script>
import DataContainer from '@/components/DataContainer'

export default {
  name: 'Home',

  components: {
    DataContainer
  },

  props: ['verses']
}
</script>
