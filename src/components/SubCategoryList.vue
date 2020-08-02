<template>
  <div>A verse</div>
</template>

<script>
export default {
  name: 'SubCategoryList',

  props: ['verses'],

  created() {
    console.log(this.verses)
    //console.log('----------')
  },
}
</script>
