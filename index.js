//Selectors
const todoInput = document.querySelector('.todolist__addTask--input');
const todoButton = document.querySelector('.todolist__addTask--button');
const todoList = document.querySelector('.list__menu');


//Functions
const addTask = (e) => {
  e.preventDefault();

  //<div>
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('list')

  //<li>
  const task = document.createElement('li');
  task.classList.add('list--item');
  //getIput valur from input
  const input= todoInput.value;
  const textIput = document.createTextNode(input);
  todoInput.value='';
  task.appendChild(textIput);
  todoDiv.appendChild(task)

  //Container buttons
  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('list__actions')

  //Completed <button>
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<span class="material-icons">done</span>';
  completedButton.classList.add('list__actions--completed')
  buttonContainer.appendChild(completedButton);

  //Trash <button>
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<span class="material-icons">delete</span>';
  trashButton.classList.add('list__actions--completed')
  buttonContainer.appendChild(trashButton);

  //append Buttons to div
  todoDiv.appendChild(buttonContainer);

  //append to list
  todoList.appendChild(todoDiv);

}

//Events
todoButton.addEventListener('click', addTask);




// // Create a new list item when clicking on the "Add" button
// function newElement() {
//   var inputValue = document.getElementById("newTask").value;
//   var t = document.createTextNode(inputValue);
//   const li = document.createElement("li");
//   if (inputValue === '') {
//     alert("You must write something!");
//   } else {
//     li.appendChild(t);
//     document.getElementById("todolist__list--menu").appendChild(li);
//   }
//   document.getElementById("newTask").value = "";

//   var span = document.createElement("span");
//   var txt = document.createTextNode("X");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   span.onclick = function() {
//     let li = this.parentElement;
//     li.style.display = "none";
//   }
// }
