<template lang="pug">
main.pt-16.pb-8
  page-header.pl-2.pr-2(title='Work')
  section.pl-2.pr-2
    work-page(:work='work')
  work-nav(
    :prev='prev'
    :next='next'
    :work='all'
    )
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
  validate: function({ params }) {
    let valid = false
    for (var w of work) {
      if (w.id == params.id) {
        valid = true
        this.work = w
      }
    }
    return valid
  },
  head: function() {
    return {
      title: 'Andrew Kennedy//Work//Whopper Sacrifice'
    }
  },
  data: function() {
    return {
      all: work,
      work: null,
      prev: {},
      next: {}
    }
  },
  created: function() {
    work.map((w, i) => {
      if (w.id == this.$route.params.id) {
        this.work = w
        this.prev = work[i > 0 ? i - 1 : work.length - 1]
        this.next = work[i < work.length - 1 ? i + 1 : 0]
      }
    })
  }
}
</script>
