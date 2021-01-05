const multiplier = {
  //numers array to multiply
  //and a single number to multiply by

  numbers: [, 4, 50, 34, 45, 6600, 0, 222222, 6],
  multiplyBy: 5,
  multiplyMethod() {
    return this.numbers.map((number) => number * this.multiplyBy);
  },
};
console.log(multiplier.multiplyMethod());
