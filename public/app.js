import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
let docOne;
let docTwo;
docOne = new Invoice("yoshi", "webwork", 250);
docTwo = new Payment("mario", "plumbing work", 200);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
const invOne = new Invoice("mario", "work on mario web", 250);
const invTwo = new Invoice("luigi", "work on luigi web", 250);
const invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
const anchor = document.querySelector("a");
//form
const form = document.querySelector(".new-item-form");
//inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "Invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
