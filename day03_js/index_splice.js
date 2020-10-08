const num = [10, 20, 30, 40];

/* splice : 기존의 배열을 건드린다 */
/*
const index = num.indexOf(30);
//해당 index 부터 두 개 지우겠다
const spliced = num.splice(index, 2);

//없어진 배열
console.log(spliced);
//지우고 남은 배열
console.log(num);
*/

/* slice : 기존의 배열을 건드리지 않는다 */
const sliced = num.slice(0, 2);
console.log(sliced);
console.log(num);
