//getting elements from html
const input = document.querySelector("input");
const btnAdd = document.querySelector(".add");
const select = document.querySelector(".filter");
const ul = document.querySelector(".listed-items");
const span= document.querySelector('span')

//functions
const add = (event) => {
  event.preventDefault(); // prevents refreshing page
  if (input.value.length > 0) {
    //creating div element
    const todoDiv = document.createElement("div");
    todoDiv.className = "todoDiv";
    //creating list el
    const todoList = document.createElement("li");
    todoList.className = "todoList";
    todoList.innerHTML = input.value;
    todoDiv.appendChild(todoList);
    //creating button-completed
    const btnCompleted = document.createElement("button");
    btnCompleted.className = "complete-btn";
    btnCompleted.innerHTML = '<i class="fas fa-check"></i>';
    todoDiv.appendChild(btnCompleted);
    //creating button-delete
    const btnDel = document.createElement("button");
    btnDel.className = "delete-btn";
    btnDel.innerHTML = '<i class="fas fa-trash"></i>';
    todoDiv.appendChild(btnDel);
    //appending to parent ul
    ul.appendChild(todoDiv);

    //clear input value
    input.value = "";
    span.innerHTML='';
  }else{
      span.innerHTML='Error, input value is empty. Try to type something';
  }
};

// addEventListeners
btnAdd.addEventListener("click", add);
