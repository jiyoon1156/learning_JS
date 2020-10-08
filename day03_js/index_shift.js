const num = [10, 20, 30, 40];

/* shift : 앞에서부터 원소를 하나씩 빼준다 */
let val = num.shift();
console.log(val);
console.log(num);

/* pop: 끝에서부터 원소를 하나씩 빼준다, push 랑 짝지*/
val = num.pop();
console.log(val);
console.log(num);

/* unshift : 배열 앞에 원소 추가 */
num.unshift(5);
console.log(num);

/* concat: 여러 개의 배열을 하나의 배열로 합친다. 기존의 배열을 건드리지 않는다. */
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const concated = arr1.concat(arr2);
//concated = [...arr1, ...arr2] spread 연산자
console.log(arr1);
console.log(arr2);
console.log(concated);

/* join: 배열 안에 있는 값들을 문자열 형태로 합쳐준다 */
const arr3 = [1, 2, 3, 4, 5];
console.log(arr3.join());
console.log(arr3.join(' '));
console.log(arr3.join(', '));
