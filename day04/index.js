const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");


function increasing(){
	const num = parseInt(number.innerText, 10);
	number.innerText = num + 1;
}

function decreasing(){
	const num = parseInt(number.innerText, 10);
	number.innerText = num - 1;
}

function main(){
	increase.addEventListener("click", increasing);
	decrease.addEventListener("click", decreasing);
}

main();
