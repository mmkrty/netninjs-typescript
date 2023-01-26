import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
const anchor = document.querySelector("a");
//form
const form = document.querySelector(".new-item-form");
//inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
//list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    let values = [
        tofrom.value,
        details.value,
        amount.valueAsNumber,
    ];
    if (type.value === "Invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "end");
});
// interface and ENUMS Generics
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docOne = {
    uid: 1,
    resourceType: ResourceType.PERSON,
    data: { title: "yoshi" },
};
const docTwo = {
    uid: 2,
    resourceType: ResourceType.BOOK,
    data: { title: "name of the wind" },
};
console.log(docOne, docTwo);
// tuples
let tup = ["hello", 24, true];
let student;
student = ["bruce", 18];
