import { MainModel } from "../MainModel";

export class TableModel extends MainModel {
  constructor() {
    super();
    this.tableID = 0;

    this.orderedList = [];
    this.cashCD = 0;
    this.amount = 0;
  }
}
