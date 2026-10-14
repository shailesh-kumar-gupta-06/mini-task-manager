const API_URL = "http://127.0.0.1:5000/api/tasks";


async function loadTasks() {

    try {

        const response = await fetch(API_URL);

        const tasks = await response.json();

        displayTasks(tasks);

    } catch (error) {

        console.log("Error:", error);

    }
}


function displayTasks(tasks) {

    const taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    tasks.forEach(task => {

        const taskDiv = document.createElement("div");

        taskDiv.className = "task";

        taskDiv.innerHTML = `
            <span
                class="task-title ${task.completed ? "completed" : ""}"
                onclick="toggleTask(${task.id})"
            >
                ${task.title}
            </span>

            <button
                class="delete-btn"
                onclick="deleteTask(${task.id})"
            >
                Delete
            </button>
        `;

        taskList.appendChild(taskDiv);

    });
}


async function addTask() {

    const input = document.getElementById("taskInput");

    const title = input.value.trim();

    if (title === "") {
        alert("Please enter a task");
        return;
    }

    await fetch(API_URL, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            title: title
        })

    });

    input.value = "";

    loadTasks();
}


async function toggleTask(id) {

    await fetch(`${API_URL}/${id}`, {

        method: "PUT"

    });

    loadTasks();
}


async function deleteTask(id) {

    await fetch(`${API_URL}/${id}`, {

        method: "DELETE"

    });

    loadTasks();
}


// Load tasks when page opens
loadTasks();