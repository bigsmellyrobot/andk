<template lang="pug">
  main.pt-16.pb-8
    page-header.pl-2.pr-2(title='Work')
    section.pl-2.pr-2
      work-page(:work='work')
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'
import WorkPage from '~/components/WorkPage.vue'
import WorkNav from '~/components/WorkNav.vue'
import work from '~/static/data/work.json'

export default {
  components: {
    PageHeader,
    WorkPage,
    WorkNav
  },
  head: function() {
    return {
      title: 'Andrew Kennedy//Work//Whopper Sacrifice'
    }
  },
  data: function() {
    return {
      all: work,
      work: work[0],
      prev: work[work.length - 1],
      next: work[1]
    }
  }
}
</script>

<style lang="scss">
</style>
