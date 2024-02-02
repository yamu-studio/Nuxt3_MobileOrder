import { MainModel } from "../MainModel";
import { FoodAmountModel } from "../food/FoodAmountModel";
import { FoodModel } from "../food/FoodModel";

export class OrderModel extends MainModel {
  constructor() {
    super();
    this.orderID = 0;
    this.foodID = 0;
    this.foodAmountID = 0;

    this.count = 0;

    this.food = new FoodModel();
    this.foodAmount = new FoodAmountModel();
  }
}
