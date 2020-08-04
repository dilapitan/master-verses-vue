<template>
  <v-container fluid>
    <div :class="`text-xs-caption text-sm-h4`">
      Randomize! And Recite!
    </div>

    <br />

    <DataContainer :verses="verses" page="randomize" />
  </v-container>
</template>

<script>
import DataContainer from '@/components/DataContainer'

export default {
  name: 'Randomize',

  components: {
    DataContainer
  },

  props: ['verses']
}
</script>
