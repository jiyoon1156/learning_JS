//getter
const numbers = {
  a: 1,
  b: 2,
  get sum() {
    console.log("ft_sum is working");
    return this.a + this.b;
  },
};

console.log(numbers.sum);
numbers.b = 5;
console.log(numbers.sum);

//setter
const dog = {
  _name: "doggy",
  set setName(val) {
    console.log("name is changing");
    this._name = val;
  },
};

console.log(dog._name);
dog.setName = "catty";
console.log(dog._name);

//
const num = {
  _a: 1,
  _b: 2,
  sum: 3,
  calculate() {
    this.sum = this._a + this._b;
  },
  get a() {
    return this._a;
  },
  get b() {
    return this._b;
  },
  set setA(val) {
    this._a = val;
    this.calculate();
  },
  set setB(val) {
    this._b = val;
    this.calculate();
  },
};

//이렇게 만들면 조회할때마다 더해지는 게 아니라 한번 더해지고 끝남
console.log(num.sum);
num.setA = 5;
num.setB = 7;
num.setA = 9;
console.log(num.sum);
console.log(num.sum);
console.log(num.sum);
