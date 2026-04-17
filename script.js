function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value;
  //   console.log(task);
  if (task === "") {
    alert("Please enter a task.");
    return;
  }

  let li = document.createElement("li");

  li.innerText = task;
  //   console.log(li);

  li.onclick = function () {
    if (li.style.textDecoration === "line-through") {
      li.style.textDecoration = "none";
    } else {
      li.style.textDecoration = "line-through";
    }
    // li.style.textDecoration = "line-through";
    // console.log("clicked");
  };

  let deletebtn = document.createElement("button");
  //   console.log(deletebtn);
  deletebtn.innerText = "Delete";

  deletebtn.onclick = function () {
    li.remove();
  };
  li.appendChild(deletebtn);
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

document
  .getElementById("taskInput")
  .addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
      console.log("calling addtask function");
      addTask();
    }
  });
