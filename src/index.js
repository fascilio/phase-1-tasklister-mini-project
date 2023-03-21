document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
const taskList = document.getElementById("tasks");

let tasks = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const input = document.getElementById("new-task-description");
  const task = input.value;

  if (task) {
    tasks.push(task);
    updateTaskList();
    input.value = "";
  }
});

function updateTaskList() {
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.innerText = task;
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", () => {
      tasks = tasks.filter((t) => t !== task);
      updateTaskList();
    });
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });
}

});
