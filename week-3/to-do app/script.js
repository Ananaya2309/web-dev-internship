const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {

    let task = taskInput.value;

    if(task === ""){
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    li.innerText = task;

    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "❌";

    deleteBtn.onclick = function (event) {
        event.stopPropagation();   // Delete click se complete trigger nahi hoga
        li.remove();
    };
    li.appendChild(editBtn);

    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";
});
let editBtn = document.createElement("button");

editBtn.innerText = "✏️";

editBtn.onclick = function(event){

    event.stopPropagation();

    let newTask = prompt("Edit your task", task);

    if(newTask !== null && newTask.trim() !== ""){

        task = newTask;

        li.firstChild.textContent = task;

    }

};