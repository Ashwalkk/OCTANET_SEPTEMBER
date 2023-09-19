document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("task");
    const dueDateInput = document.getElementById("due");
    const prioritySelect = document.getElementById("priority");

    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        const dueDate = dueDateInput.value;
        const priority = prioritySelect.value;
        

        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                 
                
                <span class="task-title">${taskText}</span><span>|</span>
                <span class="pri">${priority}</span><span>|</span>
                <span class="due-date">${dueDate}</span><span>|</span>
                
                <button class="del">Delete</button>
                
            `;
            taskList.appendChild(listItem);

            taskInput.value = "";
            dueDateInput.value = "";
            prioritySelect.value = "High";
        
        }
    });

    taskList.addEventListener("click", function(e) {
        if (e.target.classList.contains("del")) {
            const listItem = e.target.parentElement;
            taskList.removeChild(listItem);
        }
    });
});
