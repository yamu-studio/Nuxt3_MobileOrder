import { MainModel } from "../MainModel";

export class FoodAmountModel extends MainModel {
  constructor() {
    super();
    this.foodAmountID = 0;
    this.foodID = 0;

    this.labelCD = 0;
    this.amount = 1000;
  }
}
