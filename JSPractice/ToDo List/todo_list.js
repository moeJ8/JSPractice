const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

let tasks = [];
function addTask(){
    const taskText = taskInput.value.trim();
    if (taskText !== ""){
        tasks.push({Text: taskText});
        taskInput.value = "";
        displayTasks();
        }
}

function displayTasks(){
    taskList.innerHTML ="";
    tasks.forEach((task,index)=>{
        const li = document.createElement("li");
        li.innerHTML = `<input type=>`
    });
}