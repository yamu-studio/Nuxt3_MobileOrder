<template lang="pug">
.basicView.container.pt-4
  p.title {{ genreTitle }}一覧
  .columns.is-multiline.is-mobile
    .column.is-half.p-0(v-for="food in foodList" :key="food.key")
      FoodCard(:food="food")
</template>

<script setup lang="ts">
import { FoodModel } from "~/models/food/FoodModel";

const route = useRoute();
// genre:商品ジャンルのコード値
// is_drink:ドリンク関連かどうか

// 仮：商品ジャンルとそのタイトル
const genreTitle = ref("揚げ物");

// 仮：商品情報リスト
const food = new FoodModel();
food.foodID = 1;
food.name = "商品名";

const foodList = ref([
  food,
  food,
  food,
  food,
  food,
  food,
  food,
  food,
  food,
  food,
  food,
  food,
  food,
  food,
  food,
  food,
  food,
  food,
  food,
  food,
  food,
  food,
  food,
  food,
  food,
  food,
  food,
  food,
]);
</script>
