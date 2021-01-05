const square = (x) => {
  return x * x;
};

console.log(square(5));

const getFirstName = (name) => {
  return name.split(" ")[0];
};

console.log(getFirstName("Mike Romeo Tyson"));

const getLastName = (name) => name.split(" ")[name.split(" ").length - 1];
console.log(getLastName("Mike Romeo Tyson"));
