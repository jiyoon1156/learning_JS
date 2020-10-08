//CASE 1)
//배열에 있는 전체적인 내용을 바꿔주고 싶을 때
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
/* 
* for each statement *

const squared = [];
arr.forEach(n => {
	squared.push(n * n);
});
*/
const squared = arr.map(n => n * n);

//CASE 2)
//특정 원소 접근할 때
const items = [
	{
		id : 1,
		text: 'hello'
	},
	{
		id : 2,
		text: 'bye'
	}
];

const texts = items.map(item => item.text);
console.log(texts); //["hello", "bye"]


//CASE 3)
//indexOf: 인덱스 위치 알려줌, 0 부터 시작
const superheroes = ['ironman', 'captainAmerica', 'thor', 'doctorstrange'];
const index = superheroes.indexOf('thor');
console.log(index);

//CASE 4)
//findIndex
const todos = [
	{
		id : 1,
		text: 'js study',
		done: true,
	},
	{
		id : 2,
		text : 'eat dinner',
		done: true,
	},
	{
		id : 3,
		text: 'ssss',
		done: true,
	},
	{
		id : 4,
		text: 'ffff',
		done: false,
	}
]

//id 가 3인걸 찾고 싶다, 0부터 시작

// const idx = todos.indexOf(3);
// const idx = todos.findIndex(todo => todo.id == 3)
// const idx = todos.find(todo => todo.id == 3)
const idx = todos.find(todo => todo.done == false)
console.log(idx);
