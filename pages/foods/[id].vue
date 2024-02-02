<template lang="pug">
.basicView.container
  BackButton

  figure.image#mainImg
    img(:src="foodData.img")
  p.title.has-text-left.p-3 {{ foodData.name }}

  //- スタッフ画像とセリフ
  EmployeeComent(image="https://bulma.io/images/placeholders/128x128.png" coment="スタッフセリフスタッフセリフスタッフセリフスタッフセリフスタッフセリフスタッフセリフスタッフセリフスタッフセリフスタッフセリフスタッフセリフスタッフセリフスタッフセリフスタッフセリフ")

  //- 注文の量とか
  .content-row-space-right.p-2(v-for="amount in foodData.amountList")
    .pr-3
      p.has-text-right {{ $constants.getAmountLabel(amount.labelCD) }}
      p.title.has-text-right.is-4 ￥{{ amount.amount.toLocaleString() }}
    button.button.orderBtn.p-5(@click="preOrder(amount)") + 注文

  //- おすすめの提示
  //- ↓縦に羅列
  .container.pt-3
    p.title.is-5 おすすめの〇〇ペアリング
    .columns.is-multiline
      .column.is-full.p-2(v-for="food in foodList" :key="food.key")
        WideFoodCard(:food="food")
</template>

<script setup lang="ts">
import { FoodAmountModel } from "~/models/food/FoodAmountModel";
import { FoodModel } from "~/models/food/FoodModel";
import { OrderModel } from "~/models/order/OrderModel";

const foodID = useRoute().params.id as string;
const foodData = ref(new FoodModel());

// 仮：商品情報
const food = new FoodModel();
food.foodID = Number(foodID);
food.name = "商品情報";

// 仮：商品の価格情報
food.amountList.push(new FoodAmountModel());
const foodAmount = new FoodAmountModel();
foodAmount.labelCD = 1;
foodAmount.amount = 2000;
food.amountList.push(foodAmount);

foodData.value = food;

const demoFood = new FoodModel();
const foodList = ref([
  demoFood,
  demoFood,
  demoFood,
  demoFood,
  demoFood,
  demoFood,
  demoFood,
  demoFood,
]);

function preOrder(amount: FoodAmountModel) {
  let order = new OrderModel();
  order.count = 1;
  order.food = foodData.value;
  order.foodAmount = amount;
  useUserStore().addOrder(order);
}
</script>

<style lang="scss" scoped>
#mainImg {
  top: 0px;
  left: 0px;
  width: 100vw;
}
</style>
