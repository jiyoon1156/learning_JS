const toDoForm = document.querySelector(".js-toDoForm"),
	toDoInput =toDoForm.querySelector("input"),
	toDoList = document.querySelector(".js-toDoList");

const TODO_LS = "todos";
let toDos = [];

function save_local()
{
	localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}

function del_todo(event)
{
	const btn = event.target;
	const li = btn.parentNode;
	toDoList.removeChild(li);
	const clean_todo = toDos.filter(
		function(toDo)
		{
			return toDo.id != parseInt(li.id);
		}
	);
	toDos = clean_todo;
	save_local();
}

function print_list(input_val)
{
	const li = document.createElement("li");
	const del_btn = document.createElement("button");
	const span = document.createElement("span");
	const newId = toDos.length + 1;

	del_btn.innerText = "❌";
	del_btn.addEventListener("click", del_todo);
	span.innerText = input_val;

	li.appendChild(del_btn);
	li.appendChild(span);
	li.id = newId;
	toDoList.appendChild(li);

	const toDoObj = {
		input_val,
		id : newId
	};
	toDos.push(toDoObj);
	save_local();
}

function handle_submit(event)
{
	event.preventDefault();
	const input_val = toDoInput.value;
	console.log(input_val);
	print_list(input_val);
	save_local();
	toDoInput.value = "";
}

function main()
{
	const toDoFromLS = localStorage.getItem(TODO_LS);
	if (toDoFromLS != null)
	{
		//todolist 를 보여줄거야

	}
	toDoForm.addEventListener("submit", handle_submit);
}

main();
