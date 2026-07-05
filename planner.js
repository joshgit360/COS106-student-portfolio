// Grab the HTML elements we need to work with
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Listen for a click on the "Add Task" button
addTaskBtn.addEventListener('click', function() {
    const taskText = taskInput.value.trim();

    // Prevent adding empty tasks
    if (taskText === "") {
        alert("Please type a task before adding!");
        return;
    }

    // 1. Create a new list item (<li>)
    const li = document.createElement('li');
    li.style.margin = "10px 0";
    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    li.style.alignItems = "center";
    li.style.background = "#fff";
    li.style.padding = "10px";
    li.style.borderRadius = "4px";
    li.style.boxShadow = "0 2px 4px rgba(0,0,0,0.05)";

    // 2. Create a span text element for the task description
    const taskSpan = document.createElement('span');
    taskSpan.innerText = taskText;
    li.appendChild(taskSpan);

    // Create a container for the action buttons
    const btnContainer = document.createElement('div');

    // 3. Create the "Complete" button
    const completeBtn = document.createElement('button');
    completeBtn.innerText = "✓";
    completeBtn.style.backgroundColor = "#2a9d8f";
    completeBtn.style.marginRight = "5px";
    completeBtn.style.padding = "5px 10px";
    completeBtn.addEventListener('click', function() {
        // Toggle strike-through text formatting
        if (taskSpan.style.textDecoration === "line-through") {
            taskSpan.style.textDecoration = "none";
            taskSpan.style.color = "#333";
        } else {
            taskSpan.style.textDecoration = "line-through";
            taskSpan.style.color = "#aaa";
        }
    });

    // 4. Create the "Delete" button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = "✕";
    deleteBtn.style.backgroundColor = "#e63946";
    deleteBtn.style.padding = "5px 10px";
    deleteBtn.addEventListener('click', function() {
        // Remove the list item from the webpage
        taskList.removeChild(li);
    });

    // Append buttons to container, container to list item, list item to list
    btnContainer.appendChild(completeBtn);
    btnContainer.appendChild(deleteBtn);
    li.appendChild(btnContainer);
    taskList.appendChild(li);

    // Clear the input box for the next entry
    taskInput.value = "";
});
