<template lang="pug">
  main.p-2.pt-16
    page-header(title='Cycling Stats')
    section
      .flex.items-end.font-hairline.mb-1
        .w-48.text-3xl all time
        .text-3xl {{this.cycling.total}}
      .flex.items-end.font-hairline.mb-1
        .w-48.text-3xl biggest
        .text-3xl {{this.cycling.biggest}}
      p.font-hairline.mt-16 stats provided by 
        a(href='http://developers.strava.com') Strava API
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
    axios.get('http://localhost:8888/.netlify/functions/cycling')
    .then(res => {
      console.log(res.data)
      this.cycling.total = `${(res.data.all_ride_totals.distance / 1609.344).toFixed(2)}mi`
      this.cycling.biggest = `${(res.data.biggest_ride_distance / 1609.344).toFixed(2)}mi`
    })
  },
  data: function() {
    return {
      cycling: {
        total: 'loading…',
        biggest: 'loading…'
      }
    }
  }
}
</script>

<style lang="scss">
</style>
