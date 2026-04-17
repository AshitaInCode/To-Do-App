// saving task on page onload
window.onload = function () {
  loadTask();
};

// Add task function
function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value;

  if (task === "") {
    alert("Please enter a task.");
    return;
  }

  createTaskElement(task);
  saveTask(task);
  input.value = "";

  //Task element creation
  function createTaskElement(task) {
    let li = document.createElement("li");
    li.innerText = task;
  }

  //Complete Toggle
  li.onclick = function () {
    li.classList.toggle("completed");
  };

  // let li = document.createElement(task);

  // li.innerText = task;
  // //   console.log(li);

  // li.onclick = function () {
  //   if (li.style.textDecoration === "line-through") {
  //     li.style.textDecoration = "none";
  //   } else {
  //     li.style.textDecoration = "line-through";
  //   }
  //   // li.style.textDecoration = "line-through";
  //   // console.log("clicked");
  // };

  // Delete Button
  let deleteBtn = document.createElement("button");
  //   console.log(deletebtn);
  deleteBtn.innerText = "Delete";

  deleteBtn.onclick = function (e) {
    e.stopPropagation();
    li.remove();
    removeTask(task);
  };

  li.appendChild(deleteBtn);

  document.getElementById("taskList").appendChild(li);
}

// Save Task to local Storage
function saveTask(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.Stringify(tasks));
}

// Load Task
function loadTask() {
  function loadTask() {
    JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(function (task) {
      createTaskElement(task);
    });
  }
}

//Remove Task
function removeTask(taskToDelete) {
  let task = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter(function (task) {
    return task !== taskToDelete;
  });

  localStorage.setItems("tasks", JSON.stringify(tasks));
}

// Enter key Support
document
  .getElementById("taskInput")
  .addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
      console.log("calling addtask function");
      addTask();
    }
  });
