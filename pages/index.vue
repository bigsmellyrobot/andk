<template lang="pug">
  main.p-2.pt-16.max-w-sm
    page-header(title='DevOps')
    section.text-justify.leading-normal
      p.font-hairline(
        v-for='p in about'
        ) {{ p }}
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'

export default {
  components: {
    PageHeader
  },
  head() {
    return {
      title: 'Andrew Kennedy//DevOps'
    }
  },
  data: function() {
    return {
      about: [
        'When it comes to technology, the only thing that matters is how the user enjoys the interaction. Time and time again, the better technology has lost out to the better user experience. I don’t care how something is “supposed” to be built, I’m more interested in the possibilities.'
      ]
    }
  }
}
</script>

<style lang="sass">
  .this-shouldnt-exist
    display: none
</style>
