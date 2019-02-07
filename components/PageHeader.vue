<template lang="pug">
  header.mb-8
    h1.text-4xl.font-hairline Andrew Kennedy
    h2.text-3xl {{ title }}
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
