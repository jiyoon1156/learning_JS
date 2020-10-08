/*
이제 지금까지 배운 것들을 활용하여 퀴즈를 풀어봅시다!
숫자 배열이 주어졌을 때 10보다 큰 숫자의 갯수를 반환하는 함수를 만드세요.
*/

function countBiggerThanTen(numbers) {
	let cnt = 0;
	for(let i = 0; i < numbers.length; i++)
	{
		if (numbers[i] > 10)
			cnt += 1;
	}
	return cnt;
}
/*
function countBiggerThanTen(numbers) {
	return numbers.filter(n => n > 10).length;
  }
*/
const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count); // 5
