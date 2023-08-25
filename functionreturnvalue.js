const finalValue = getFinalValue(76);
console.log(`<p>${finalValue}</p>`);

function isContains(array, searchValue) {
  for (const element of array) {
    console.info(`Iterasi Element $ {element}`);
    if (element === searchValue) {
      return true;
    }
  }
  return false;
}

const array = [1, 32, 4324, 3, 43, 53, 53, 43, 535, 35, 5];
const search = 43;
const found = isContains(array, search);
console.log(`<p>${found}</p>`);
