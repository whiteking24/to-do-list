// Get references to DOM elements
let submit = document.getElementById('submit');
let addTask = document.getElementById('addtask');
let todoList = document.getElementById('todo');
let doneList = document.getElementById('donelist');
let list = [];

// Add event listener to the "Add Task" button
submit.addEventListener('click', (event) => {
    if (addTask.value != '') {
        let taskText = addTask.value;
        list.push(taskText);

        // Create a new list item with a checkbox
        let li = document.createElement('li');
        let checkbox = document.createElement('input');
        checkbox.type = "checkbox";

        // Append the checkbox and task text to the list item
        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(taskText));

        // Add event listener to the checkbox
        checkbox.addEventListener('change', (event) => {
            if (event.target.checked) {
                complete(taskText, li); // Move task to completed list
            }
        });

        // Append the list item to the ToDo list
        todoList.appendChild(li);
        addTask.value = ''; // Clear the input field
    }
});

// Function to move a task to the completed list
function complete(task, listItem) {
    let comli = document.createElement('li');
    comli.textContent = task;
    doneList.appendChild(comli); // Add to completed list
    listItem.remove(); // Remove from ToDo list
}