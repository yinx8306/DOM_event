var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list=document.getElementsByTagName("li");

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

togglelist();
rmbutton();


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var button=document.createElement("button");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.appendChild(button)
	button.innerHTML="delete"
	input.value = "";

	togglelist();
	rmbutton();
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


function togglelist(){
	for (var i=0; i<list.length;i++){
		list[i].addEventListener("click",liClick)
	}
}
function liClick(){
	this.classList.toggle("done")}


function rmbutton(){
	var button=document.querySelectorAll("li button");
	for (i=0; i<button.length;i++){
		button[i].addEventListener("click",clearElement)
	}
}

function clearElement(){
	for (var i=0;i<list.length;i++){
		this.parentNode.remove()
	}
}


