<template lang="pug">
#foodImg.p-1
  NuxtLink(:to="`/foods/${food.foodID}`")
    figure.image
      img#img(:src="food.img")
    p.has-text-left.has-text-white {{ food.name }}
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
    border-radius: 12px;
    width: 262px;
    height: 306px;
    object-fit: cover;
  }
}
</style>
