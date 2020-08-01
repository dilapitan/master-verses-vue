<template>
  <v-container fluid>
    <div :class="`text-xs-caption text-sm-h4`">
      List of Memory Verses
    </div>

    <br />

    <v-row>
      <v-col cols="8" xs="8" sm="4">
        <v-select
          v-model="category"
          label="Select Category"
          :items="categories"
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  props: ['verses'],
  data: () => ({
    category: '',
    categories: [
      'All',
      'A. Christ – the Source',
      'B. Abundant Resources',
      'C. Maturity Needs',
      'D. Godly Character',
      'E. Ministry Basics',
      'F. Kingdom Commitments',
      'G. Circles of Influence',
    ],
  }),
}
</script>
