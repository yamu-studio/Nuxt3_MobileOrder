<template lang="pug">
#homeView
  p u
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "check-auth",
});
</script>

<style lang="scss" scoped>
#homeView {
  min-height: 88vh;
}
</style>
