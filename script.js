var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var del = document.getElementsByClassName("delete");
var done = document.getElementsByClassName("do");
var li = document.querySelectorAll("li");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var button2 = document.createElement('button');
	li.appendChild(document.createTextNode(input.value+" "));
	button2.appendChild(document.createTextNode("delete"));
	ul.appendChild(li);
	li.appendChild(button2);
	button2.className +="delete";
	input.value = "";
	var del = document.getElementsByClassName("delete");
	array();
}

function array(){
	Array.prototype.slice.call(del).forEach(function(item) {
  		item.addEventListener("click", function(g) {
    		g.target.parentNode.remove()
  		});
	})
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


function toggleDone(h){
	h.target.classList.toggle("done");
}

array();
ul.addEventListener("click", toggleDone);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
