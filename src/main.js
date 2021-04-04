/*---------------------
Authorized::Forhad Reza
-----------*/
const result = document.getElementById("display");

let x = operator = y = '';

function key(val) {
	if(operator) {
		y += val;
	} else {
		x += val;
	}
	renderResDiv();
}

function clr() {
	x = operator = y = '';
	renderResDiv();
}

function Equal() {
	x = parseInt(x, 2);
	y = parseInt(y, 2);
	switch(operator) {
		case '+':
			x += y;
			break;
		case '-':
			x -= y;
			break;
		case '*':
			x *= y;
			break;
		case '/':
			if(y)
				x /= y;
			break;
		default:
			break;
	}
	x = parseInt(x).toString(2);
	operator = y = '';
	renderResDiv();
}

function assignOperator(val) {
	operator = val;
	renderResDiv();
}

function renderResDiv() {
	result.innerHTML = x + operator + y;
}

/*----Mode---*/
function getURL(){
	window.location.assign("src/Next_Digit/index.html")
}
/*-------Audio Sound--------*/
var s = new Audio();
s.src = "src/Next_Digit/media/soft.m4a";

/*---------------------
Authorized::Forhad Reza
-----------*/