let tasks = [];

const addTask = () => {
    const taskInput = document.getElementById('taskInput');
    const text = taskInput.value.trim(); // Corrected: use 'value' instead of 'ariaValueMax'
    if (text) {
        tasks.push({ text: text, completed: false });
        updateTaskList();
        updateStats();
        taskInput.value = ""; // Clear the input field after adding a task
    }
};

const toggleTaskComplete = (index) => {
    tasks[index].completed = !tasks[index].completed;
    updateTaskList();
    updateStats();
};

const deleteTask = (index) => {
    tasks.splice(index, 1); // Corrected: use 'splice' instead of 'split'
    updateTaskList();
    updateStats();
};

const editTask = (index) => {
    const taskInput = document.getElementById('taskInput');
    taskInput.value = tasks[index].text;

    tasks.splice(index, 1);
    updateTaskList();
    updateStats();
};

const updateStats = () => {
    const completedTasks = tasks.filter(task => task.completed).length; // Corrected: use 'task' instead of 'tasks'
    const totalTasks = tasks.length;
    const progress = (completedTasks / totalTasks) * 100 || 0; // Ensure progress is a number
    const progressBar = document.getElementById('progress');
    progressBar.style.width = `${progress}%`; // Corrected: use backticks for template literals

    document.getElementById('numbers').innerHTML = `${completedTasks}/${totalTasks}`; // Corrected: use backticks
};

const updateTaskList = () => {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = "";

    tasks.forEach((task, index) => { // Corrected: use 'tasks' instead of 'task'
        const listItem = document.createElement("li");

        listItem.innerHTML = `
        <div class="taskItem">
            <div class="task ${task.completed ? "completed" : ""}">
                <input type="checkbox" class="checkbox" ${task.completed ? "checked" : ""} 
                    onChange="toggleTaskComplete(${index})" />
                <p>${task.text}</p>
            </div>
            <div class="icons">
                <img src="edit.webp" onClick="editTask(${index})" />
                <img src="delete.jpg" onClick="deleteTask(${index})" />
            </div>
        </div>
        `;
        taskList.appendChild(listItem);
    });
};

document.getElementById('newTask').addEventListener('click', function (e) {
    e.preventDefault();
    addTask();
});