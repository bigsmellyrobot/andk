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
      .flex.items-end.font-hairline.mb-1
        .w-48.text-3xl around earth
        .text-3xl {{this.cycling.aroundEarth}}
      svg.earth(width='110' height='110')
        path(d='M0,25 a1,1 0 0,0 100,0')
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
      this.cycling.rawTotal = res.data.all_ride_totals.distance
      this.cycling.aroundEarth = (this.cycling.rawTotal / this.earth).toFixed(2)
      this.cycling.total = `${(res.data.all_ride_totals.distance / this.conversion).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}mi`
      this.cycling.biggest = `${(res.data.biggest_ride_distance / this.conversion).toFixed(2)}mi`
    })
  },
  data: function() {
    return {
      cycling: {
        rawTotal: 0,
        total: 'loading…',
        biggest: 'loading…',
        aroundEarth: 0
      },
      earth: 40075017,
      conversion: 1609.344
    }
  }
}
</script>

<style lang="scss" scoped>
.earth {
  path {
    fill: none;
    stroke: red;
    stroke-width: 4px;
  }
}
</style>
