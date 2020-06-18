<template lang="pug">
  main.pt-16.pb-8
    page-header.pl-2.pr-2(title='Work')
    section.pl-2.pr-2
      ul.list-reset
        li(
          v-for="w in work"
          :key="w.slug"
          class='block py-1'
          )
          nuxt-link(
            :to='"/work/" + w.slug'
            class='text-white no-underline text-3xl font-hairline border-b-0 hover:border-b-2'
            ) {{w.title}}
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'

export default {
  components: {
    PageHeader
  },
  head: function() {
    return {
      title: 'Andrew Kennedy//Work'
    }
  },
  computed: {
    work() {
      return this.$store.state.work
    }
  }
}
</script>

<style lang="scss">
</style>
