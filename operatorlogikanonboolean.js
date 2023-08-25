console.info("Hello" || "");
console.info("0" || []);
console.info("0" || "NOL");
console.info(null || "Null");
console.info(undefined || "UDEFINED");
console.info(0 || false);

const person = {
    firstName: ""
    lastName: "Geona"
};

const name = person.firstName || person.LastName;
console.info(name);

console.info("Hello" && '');
console.info("" && []);
console.info("0" && "NOL");