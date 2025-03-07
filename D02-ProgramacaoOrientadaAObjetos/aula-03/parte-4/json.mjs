import { UmaClasse } from "./destructuring_array.mjs";

let student = {
  name: "Fernando",
  age: 34,
  isAdmin: false,
  courses: ["html", "css", "js"],
  wife: null,
};

let json = JSON.stringify(student);
let obj = JSON.parse(json);

console.log(json, obj.courses[2]);

const umaClasse = new UmaClasse("atributo um");

console.log(JSON.stringify(umaClasse));
