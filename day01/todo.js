const toDoForm = document.querySelector(".js-toDoForm"),
	toDoInput = toDoForm.querySelector("input");
	toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = [];

// function filterFn(toDo){
// 	return toDo.id == 1;
// }

function deleteToDo(event){
	// console.log(event.target.parentNode);
	const btn = event.target;
	const li = btn.parentNode;
	toDoList.removeChild(li);
	const cleanToDos = toDos.filter(function(toDo){
		return toDo.id != parseInt(li.id); //삭제된것들이 return 되는데 그걸 filter 하니까 삭제안한것만 남음
	}); // 해당 id 삭제가 로컬 스토리지에서 삭제되게
	toDos = cleanToDos;
	saveToDos();
}

function saveToDos(){
	localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
	const li = document.createElement("li");
	const delBtn = document.createElement("button");
	const span = document.createElement("span");
	const newId = toDos.length + 1;

	delBtn.innerText = "❌";
	delBtn.className = "toDo_btn";
	delBtn.addEventListener("click", deleteToDo);

	span.innerText = text;

	li.appendChild(delBtn);
	li.appendChild(span);
	li.id = newId;
	toDoList.appendChild(li);
	const toDoObj = {
		text: text,
		id: newId
	};
	toDos.push(toDoObj);
	saveToDos();
}

function handleSubmit(event){
	event.preventDefault();
	const currentValue = toDoInput.value;
	paintToDo(currentValue);
	toDoInput.value = "";
}

function loadToDos(){
	const loadedToDos = localStorage.getItem(TODOS_LS);
	if (loadedToDos != null){
		const parsedToDos = JSON.parse(loadedToDos);
		parsedToDos.forEach(function(toDo){
			paintToDo(toDo.text);
		});
	}
}

function init(){
	loadToDos();
	toDoForm.addEventListener("submit", handleSubmit)
}

init();
