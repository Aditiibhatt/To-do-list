document.getElementById('add-task-button').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('task-list');
        const li = document.createElement('li');
        li.className = 'task';
        li.innerHTML = `
            <span>${taskText}</span>
            <div>
                <button onclick="editTask(this)">Edit</button>
                <button onclick="toggleTask(this)">✔</button>
                <button onclick="deleteTask(this)">✖</button>
            </div>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function toggleTask(button) {
    const task = button.parentElement.parentElement;
    task.classList.toggle('completed');
}

function editTask(button) {
    const task = button.parentElement.parentElement;
    const taskText = task.querySelector('span').innerText;
    const newTaskText = prompt('Edit task:', taskText);
    if (newTaskText !== null && newTaskText.trim() !== '') {
        task.querySelector('span').innerText = newTaskText.trim();
    }
}

function deleteTask(button) {
    const task = button.parentElement.parentElement;
    task.remove();
}
