<template lang="pug">
  main.p-2.pt-16.max-w-md
    page-header(title='Experience')
    section
      .flex.flex-wrap.font-hairline.mb-4(
        v-for='e in experience'
        )
        h3.w-full.text-3xl.font-hairline {{ e.name }}
        .w-full.text-xl.font-normal.mb-1 {{ e.title }}
        .w-32.mr-2 {{ e.loc }}
        div {{ e.year }}
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'

export default {
  components: {
    PageHeader
  },
  head() {
    return {
      title: 'Andrew Kennedy//Experience'
    }
  },
  data: function() {
    return {
      experience: [
        {
          name: 'Plein Air',
          title: 'Founding Partner, Technology',
          loc: 'Austin, TX',
          year: 2017
        },
        {
          name: 'Levenson Group',
          title: 'Technology Director',
          loc: 'Austin, TX',
          year: 2015
        },
        {
          name: 'Saatchi & Saatchi LA',
          title: 'Sr. Technology Lead',
          loc: 'Los Angeles, CA',
          year: 2011
        },
        {
          name: 'Droga5',
          title: 'Technology Lead',
          loc: 'New York, NY',
          year: 2010
        },
        {
          name: 'Crispin Porter + Bogusky',
          title: 'Interactive Developer',
          loc: 'Boulder, CO',
          year: 2007
        }
      ]
    }
  }
}
</script>

<style lang="scss">
</style>
