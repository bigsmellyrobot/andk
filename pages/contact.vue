<template lang="pug">
  main.p-2.pt-16
    page-header(title='Contact')
    section
      .flex.items-end.font-hairline.mb-1
        .w-6.text-3xl e
        .text-3xl
          a(
            class='text-white no-underline border-b hover:border-b-4'
            href='mailto:andk@me.com'
            ) andk@me.com
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'

export default {
  components: {
    PageHeader
  },
  head() {
    return {
      title: 'Andrew Kennedy//Contact'
    }
  },
  data: function() {
    return {}
  }
}
</script>

<style lang="scss">
</style>
