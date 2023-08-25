let name;

if (name === undefined) {
  console.info("UNDEFINED");
} else {
  console.info("DEFINED");
}

const names = ["Michael", "Petra"];
if (names[2] === undefined) {
  console.info("ARRAY UNDEFINED");
} else {
  console.info("ARRAY DEFINED");
}

const person = {};
if (person.name === undefined) {
  console.info("OBJECT UNDEFINED");
} else {
  console.info("OBJECT DEFINED");
}
