const person = {
    firstName: "Michael",
    middleName: "Petra",
    lastName: "Geona"
};

for (const property in person) {
    console.log(`<p>${property} : ${person[property]} </p>`);
}


const names = { "Michael", "Petra", "Geona"};
for (const index in names) {
    console.log(`<p>& {index} : $ {names [index]} </p>`);
}