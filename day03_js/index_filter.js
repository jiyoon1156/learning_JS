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

const tasksNotDone = todos.filter(todo => !todo.done);
console.log(tasksNotDone);
