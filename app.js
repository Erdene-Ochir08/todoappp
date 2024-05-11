// ES5 -> var onclick  ES6 -> let,const, eventListener
const input = document.getElementsByTagName('input')[0];
const addBtn = document.getElementsByTagName('button')[0];
const ol=document.getElementsByTagName('ol')[0];
// click,scroll,key,doubleclick
addBtn.addEventListener("click",()=>{
	// 1. create li -> createElement('tagName');
	let li = document.createElement('li');
	// 2.  check li
	console.log(li);
	// 3. li dotot inputiin text oruulna
	li.innerText = input.value;
	// 4. ol dotor li-iig oruulna
	ol.append(li);
	// 5. input-ee hooson bolgoh
	input.value="";
	// 6. delete bolon check button nemeh
	let delBtn = document.createElement('button');
	delBtn.innerHTML = '<i class="bi bi-trash"></i>';
	li.append(delBtn);
	let checkBtn = document.createElement('button');
	checkBtn.innerHTML = '<i class="bi bi-check"></i>';
	li.append(checkBtn);
	// tag-d class ner uguh -> className
	delBtn.className = "del";
	
	saveData();
});

ol.addEventListener("click",(e)=>{
	console.log(e.target);
	let targetEl = e.target;
	let parentEl = (targetEl.parentElement).parentElement;
	if(e.target.className=="bi bi-trash"){
		parentEl.remove();
	}else if(e.target.className=="bi bi-check"){
		// classList -> tag deer class ner nemj ugnu
		parentEl.classList.toggle("checked");
	}
	saveData();
});

// database -> ugugdliin san -> mysql, sql
// browser-iin db -> localstorage
// setItem()-> hadgalah, getItem()->avah
localStorage.setItem("ner","Erdene-Ochir");

function saveData(){
	localStorage.setItem("todoapp",ol.innerHTML);
}
function getData(){
	ol.innerHTML = localStorage.getItem("todoapp");
}
getData();