const alpha = ["a", "b", "c", "d"];

/* ver 1 */
function print(alpha){
	console.log(alpha);
}

alpha.forEach(print)

/* ver 2 */
alpha.forEach(function(alpha){
	console.log(alpha);
})

/* ver 3 */
alpha.forEach(alpha => {
	console.log(alpha);
})
