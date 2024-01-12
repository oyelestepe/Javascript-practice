const todoInput = document.getElementById('todo-input');
const todoUl = document.getElementById('todo-ul');
const todoLi = document.getElementById('todo-li');

function task() {
    let input = todoInput.value;
    let createLi = document.createElement("li");
    let liText = createLi.innerHTML = input;
 
 if(input === '') {
     alert("Add a task !")
 } else {
     document.getElementById("todo-ul").appendChild(createLi).classList.add('todo-li');
     let trashCan = document.createElement("button");
     trashCan.innerHTML = "&#10006"
     createLi.appendChild(trashCan).setAttribute('id', 'close');
 };
    todoInput.value = "";

}

todoUl.addEventListener('click', function(e) {
    if(e.target.id === 'close') {
        e.target.parentElement.remove()
    }
});




