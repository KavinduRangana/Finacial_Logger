import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Invoice implements HasFormatter {
  readonly client: String;
  private details: String;
  public amount: Number;

  constructor(client: String, details: String, amount: Number) {
    this.client = client;
    this.details = details;
    this.amount = amount;
  }

  format() {
    return `${this.client} owes $ ${this.amount} for ${this.details}`;
  }
}
