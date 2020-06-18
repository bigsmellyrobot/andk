<template lang="pug">
main.pt-16.pb-8
  page-header.pl-2.pr-2(title='Work')
  section.pl-2.pr-2
    h3.w-full.text-3xl.font-hairline.mb-4 {{ title }}
    .max-w-xl.mb-4
      .relative(
        v-if='hero.type == "iframe"'
        style='padding-top:56.25%'
        )
        iframe.absolute.pin.w-full.h-full.bg-black(:src='hero.src')
    .text-justify.leading-normal.max-w-md.mb-4(v-html="body")
    .max-w-md(v-if='links && links.length > 0')
      h4.text-xl.mb-2 Read More
      ul.list-reset
        li.mb-2(
          v-for='l in links'
          )
          a(
            class='text-white border-b-0 hover:border-b-2 no-underline font-hairline'
            target='_blank'
            :href='l.url'
            ) @{{ l.title }}
  work-nav(
    :work='allWork'
    :slug='pageSlug'
    )
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'
import WorkNav from '~/components/WorkNav.vue'

export default {
  components: {
    PageHeader,
    WorkNav
  },
  async asyncData({ params, app, payload, route, store }) {
    let work = await import("~/assets/content/work/" + params.slug + ".json")
    return work
  },
  head: function() {
    return {
      title: 'Andrew Kennedy//Work//' + this.title
    }
  },
  computed: {
    allWork() {
      return this.$store.state.work
    },
    pageSlug() {
      return this.$route.params.slug
    }
  }
}
</script>
