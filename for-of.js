const person = {
  firstName: "Michael",
  middleName: "Petra",
  lastName: "Geona",
};

console.info(person.firstName);
console.info(person.middleName);
console.info(person.lastName);

const firstName = "Leonita";
const lastName = "Maya";

with (person) {
  console.info(firstName);
  console.info(middleName);
  console.info(lastName);
}
