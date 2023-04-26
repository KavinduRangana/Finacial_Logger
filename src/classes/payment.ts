import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Payment implements HasFormatter {
  readonly recipient: String;
  private details: String;
  public amount: Number;

  constructor(recipient: String, details: String, amount: Number) {
    this.recipient = recipient;
    this.details = details;
    this.amount = amount;
  }

  format() {
    return `${this.recipient} is owed $ ${this.amount} for ${this.details}`;
  }
}
