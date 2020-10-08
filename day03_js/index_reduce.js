const num = [1, 2, 3, 4, 5];

const sum = num.reduce((accumulator, current, idx, arr) => {
	if (idx == arr.length - 1){
		return (accumulator + current) / arr.length;
	}
	return accumulator + current;
}, 0);
//0 은 accumulator의 기본값
console.log(sum);
