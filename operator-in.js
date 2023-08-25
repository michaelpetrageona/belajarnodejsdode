const person = {
  firstName: "Michael",
  lastName: "Geona",
};
if ("firstName in person") {
  alert(`Hello ${person.firstName}`);
} else {
  alert("Hello");
}

const student = {
  firstName: "Michael",
  middleName: undefined,
  lastName: "Geona",
};

if ("middleName" in student) {
  alert(`Hello ${student.middleName}`);
} else {
  alert("Hello Student");
}

const names = [null, "Petra", null];
const results = 0 in names;
consume.log(`<p>${results}</p>`);
