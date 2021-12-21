//getting elements from html
const input = document.querySelector("input");
const btnAdd = document.querySelector(".add");
const select = document.querySelector(".filter");
const ul = document.querySelector(".listed-items");
const span = document.querySelector("span");
span.style.display = "none";
//functions

//Adding new list items function
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
    span.innerHTML = "";
    span.style.display = "none";
  } else {
    span.style.display = "inline-block";
    span.innerHTML = "Error, input value is empty. Try to type something";
    setTimeout(function () {
      span.style.display = "none";
    }, 2145);
  }
};

//Function that delete items and completes;
const delComplete = (event) => {
  const item = event.target;
  if (item.classList.contains("complete-btn")) {
    const parent = item.parentElement;
    parent.classList.toggle("completed");

    console.log("complete but");
  } else if (item.classList.contains("delete-btn")) {
    const parent = item.parentElement;
    parent.classList.add("fall");
    // parent.addEventListener('transitionend', () => {
    //     parent.remove();
    // })
    setTimeout(function () {
      parent.remove();
    }, 545);
  }
};

//filter function
const filter = () => {
  const x = select.value;
  switch (x) {
    case "all":
      var children = ul.children;
      for (var i = 0; i < children.length; i++) {
        children[i].style.display = "flex";
      }
      break;
    case "completed":
      var children = ul.children;
      for (var i = 0; i < children.length; i++) {
        if (!children[i].classList.contains("completed")) {
          children[i].style.display = "none";
        }
      }
      break;
    case "not-completed":
      var children = ul.children;
      for (var i = 0; i < children.length; i++) {
        if (children[i].classList.contains("completed")) {
          children[i].style.display = "none";
        } else {
          children[i].style.display = "flex";
        }
      }
  }
};

// addEventListeners
btnAdd.addEventListener("click", add);
ul.addEventListener("click", delComplete);
select.addEventListener("click", filter);
