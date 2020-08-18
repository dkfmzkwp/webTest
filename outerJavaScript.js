function sum(){
	var value1 = document.getElementById('value1');
	var value2 = document.getElementById('value2');
	var value3 = document.getElementById('value3');
	var sum = parseInt(value1.value) + parseInt(value2.value);
	value3.value = sum;
	return;
}
function sub(){
	var value1 = document.getElementById('value1');
	var value2 = document.getElementById('value2');
	var value3 = document.getElementById('value3');
	var sum = parseInt(value1.value) - parseInt(value2.value);
	value3.value = sum;
	return;
}
function mul(){
	var value1 = document.getElementById('value1');
	var value2 = document.getElementById('value2');
	var value3 = document.getElementById('value3');
	var sum = parseInt(value1.value) * parseInt(value2.value);
	value3.value = sum;
	return;
}
function div(){
	var value1 = document.getElementById('value1');
	var value2 = document.getElementById('value2');
	var value3 = document.getElementById('value3');
	var sum = parseInt(value1.value) / parseInt(value2.value);
	value3.value = sum;
	return;
}
function cls(){
	var value1 = document.getElementById('value1');
	var value2 = document.getElementById('value2');
	var value3 = document.getElementById('value3');
	value1.value = "";
	value2.value = "";
	value3.value = "";
	return;
}