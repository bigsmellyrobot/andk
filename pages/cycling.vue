<template lang="pug">
  main.p-2.pt-16
    page-header(title='Cycling Stats')
    section
      .flex.items-end.font-hairline.mb-1
        .w-6.text-3xl {{this.cycling.stats}}
</template>

<script>
import axios from 'axios'
import PageHeader from '~/components/PageHeader.vue'

export default {
  components: {
    PageHeader
  },
  head() {
    return {
      title: 'Andrew Kennedy//Cycling'
    }
  },
  mounted() {
    //this.cycling.stats = 200
    //console.log(this.cycling.stats)
    axios.get('http://localhost:8888/.netlify/functions/cycling')
    .then(res => {
      console.log(res)
    })
  },
  data: function() {
    return {
      cycling: {
        stats: 100
      }
    }
  }
  // data: function() {
  //   return {
  //     cycling: function() {
  //       axios.get('https://localhost:8888/.netlify/functions/cycling')
  //       .then(res => {
  //         console.log(res.data)
  //       })
  //     }
  //   }
  // }
}
</script>

<style lang="scss">
</style>
