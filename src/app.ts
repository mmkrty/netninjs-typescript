import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice("yoshi", "webwork", 250);
docTwo = new Payment("mario", "plumbing work", 200);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

const invOne = new Invoice("mario", "work on mario web", 250);
const invTwo = new Invoice("luigi", "work on luigi web", 250);

const invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

const anchor = document.querySelector("a")!;

//form
const form = document.querySelector(".new-item-form") as HTMLFormElement;

//inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;

  if (type.value === "Invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }
  console.log(doc);
});
