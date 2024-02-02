<template lang="pug">
NuxtLink.content-row-space-left-start(:to="`/foods/${food.foodID}`")
  figure.image#foodImg
    img#img(:src="food.img")
  .contentDetail.pl-2#wideFoodContent
    p.title.is-5.has-text-left.has-text-white {{ food.name }}
    p.subtitle.has-text-left.has-text-white.is-size-7 {{ food.content }}
</template>

<script setup lang="ts">
import type { FoodModel } from "~/models/food/FoodModel";

const props = defineProps<{
  food: FoodModel;
}>();
</script>

<style lang="scss" scoped>
#foodImg {
  flex-shrink: 0;
  img {
    width: 30vw;
    object-fit: cover;
  }
}
</style>
