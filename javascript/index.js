// Starts carousel cycling
function cycleCarousel() {
    const carousel = document.getElementById('myCarousel');
    const items = carousel.getElementsByClassName('carousel-item');
    let activeIndex = 0;

    items[activeIndex].classList.add('active');

    setInterval(() => {
        items[activeIndex].classList.remove('active');
        activeIndex = (activeIndex + 1) % items.length;
        items[activeIndex].classList.add('active');
    }, 3000);
}
// Start the carousel when the document loads
document.addEventListener('DOMContentLoaded', cycleCarousel);


// Toggles the task's completion status
function toggleTaskStatus(checkbox) {
    const label = checkbox.nextElementSibling;
    if (checkbox.checked) {
        label.classList.add('completed');
    } else {
        label.classList.remove('completed');
    }
}

// Prevents the label click from triggering the checkbox
function preventCheckboxTrigger(event) {
    event.preventDefault();
    event.stopPropagation();
}

// Adds a new task to the list
function addTask(inputId, listId) {
    let newTaskInput = document.getElementById(inputId);
    let newTaskValue = newTaskInput.value.trim();
    let taskList = document.getElementById(listId);

    if (newTaskValue) {
        let uniqueId = 'task-' + new Date().getTime();

        let li = document.createElement('li');
        li.className = 'task-item';

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';
        checkbox.id = uniqueId;
        checkbox.addEventListener('change', function() { toggleTaskStatus(this); });

        let label = document.createElement('label');
        label.className = 'task-label';
        label.setAttribute('for', uniqueId);
        label.setAttribute('contenteditable', 'true');
        label.textContent = newTaskValue;
        label.addEventListener('click', preventCheckboxTrigger);

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-task-btn';
        deleteBtn.addEventListener('click', function() { li.remove(); });

        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);

        newTaskInput.value = '';
    } else {
        alert('Please enter a task.');
    }
}

// Adds a new list container
function addContainer() {
    let toDoListSection = document.getElementById('toDoList');
    let existingContainers = toDoListSection.getElementsByClassName('container').length;
    let newTaskId = 'newTask' + (existingContainers + 1);
    let taskListId = 'taskList' + (existingContainers + 1);

    let container = document.createElement('div');
    container.className = 'container';

    let title = document.createElement('h1');
    title.contentEditable = 'true';
    title.className = 'editable-header';
    title.textContent = 'Todo List';
    container.appendChild(title);

    let inputContainer = document.createElement('div');
    inputContainer.className = 'input-container';

    let newTaskInput = document.createElement('input');
    newTaskInput.type = 'text';
    newTaskInput.id = newTaskId;
    newTaskInput.className = 'newTask';
    newTaskInput.placeholder = 'Add a new task...';
    inputContainer.appendChild(newTaskInput);

    let addTaskButton = document.createElement('button');
    addTaskButton.className = 'taskBtn';
    addTaskButton.textContent = 'Add Task';
    addTaskButton.onclick = function() { addTask(newTaskId, taskListId); };
    inputContainer.appendChild(addTaskButton);

    container.appendChild(inputContainer);

    let taskList = document.createElement('ul');
    taskList.className = 'taskList';
    taskList.id = taskListId;
    container.appendChild(taskList);

    toDoListSection.insertBefore(container, toDoListSection.lastElementChild);
}

