// // Create a "close" button and append it to each list item
// var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }



// // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }




// // Add a "checked" symbol when clicking on a list item
// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);




// Create a new list item when clicking on the "Add" button
function newElement() {
  var inputValue = document.getElementById("newTask").value;
  var t = document.createTextNode(inputValue);
  const li = document.createElement("li");
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    li.appendChild(t);
    document.getElementById("todolist__list--menu").appendChild(li);
  }
  document.getElementById("newTask").value = "";

  var span = document.createElement("span");
  var txt = document.createTextNode("X");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  span.onclick = function() {
    let li = this.parentElement;
    li.style.display = "none";
  }
}
