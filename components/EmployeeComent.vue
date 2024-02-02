<template lang="pug">
.content-row-space-left
  figure.image.is-96x96
    img.is-rounded(:src="image")
  .balloon1-left 
    p.subtitle.has-text-black.has-text-left.is-6 {{ coment }}
</template>

<script setup lang="ts">
const props = defineProps<{
  image: string;
  coment: string;
}>();
</script>
