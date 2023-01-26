import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

const anchor = document.querySelector("a")!;

//form
const form = document.querySelector(".new-item-form") as HTMLFormElement;

//inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

//list template instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;

  let values: [string, string, number] = [
    tofrom.value,
    details.value,
    amount.valueAsNumber,
  ];

  if (type.value === "Invoice") {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }

  list.render(doc, type.value, "end");
});

// interface and ENUMS Generics
enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}

interface Resource<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

const docOne: Resource<object> = {
  uid: 1,
  resourceType: ResourceType.PERSON,
  data: { title: "yoshi" },
};

const docTwo: Resource<object> = {
  uid: 2,
  resourceType: ResourceType.BOOK,
  data: { title: "name of the wind" },
};

console.log(docOne, docTwo);

// tuples
let tup: [string, number, boolean] = ["hello", 24, true];
let student: [string, number];
student = ["bruce", 18];
