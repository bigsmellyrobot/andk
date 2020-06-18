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
        div {{ e.date }}
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
  computed: {
    experience() {
      return this.$store.state.experience
    }
  }
}
</script>

<style lang="scss">
</style>
