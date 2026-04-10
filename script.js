let tasks = [];

/* OPEN MODAL */
function openModal() {
    document.getElementById("modal").style.display = "block";
}

/* CLOSE MODAL (optional UX) */
window.onclick = function(e) {
    if (e.target.id === "modal") {
        document.getElementById("modal").style.display = "none";
    }
};

/* ADD TASK */
function addTask() {
    let text = document.getElementById("taskText").value;
    let tag = document.getElementById("taskTag").value;

    if (!text) return;

    let task = {
        id: Date.now(),
        text,
        tag,
        status: "todo",
        completed: false
    };

    tasks.push(task);

    document.getElementById("modal").style.display = "none";
    document.getElementById("taskText").value = "";
    document.getElementById("taskTag").value = "";

    renderTasks();
}

/* RENDER TASKS */
function renderTasks() {
    document.getElementById("todo").innerHTML = "<h4>To Do</h4>";
    document.getElementById("progress").innerHTML = "<h4>In Progress</h4>";
    document.getElementById("done").innerHTML = "<h4>Completed</h4>";

    tasks.forEach(task => {

        let div = document.createElement("div");
        div.className = "task";

        div.innerHTML = `
            <span style="${task.completed ? 'text-decoration: line-through;' : ''}">
                ${task.text}
            </span>
            <div class="tag ${task.tag}">${task.tag}</div>
            <div style="margin-top:8px;">
                <button class="completeBtn">✔</button>
                <button class="deleteBtn">✖</button>
            </div>
        `;

        /* MARK COMPLETE (toggle + move to done) */
        div.querySelector(".completeBtn").onclick = () => {
            task.completed = !task.completed;
            task.status = task.completed ? "done" : "todo";
            renderTasks();
        };

        /* DELETE TASK */
        div.querySelector(".deleteBtn").onclick = () => {
            tasks = tasks.filter(t => t.id !== task.id);
            renderTasks();
        };

        /* MOVE TASK COLUMN ON CLICK */
        div.onclick = (e) => {
            if (e.target.tagName === "BUTTON") return;

            if (task.status === "todo") task.status = "progress";
            else if (task.status === "progress") task.status = "done";
            else task.status = "todo";

            renderTasks();
        };

        document.getElementById(task.status).appendChild(div);
    });
}
/* REMINDERS SYSTEM */

let remindersData = {};
let today = new Date().toISOString().split("T")[0];

/* LOAD DEFAULT */
function loadReminders() {
    if (!remindersData[today]) {
        remindersData[today] = ["Breakfast", "Lunch", "Dinner"];
    }
}

/* RENDER REMINDERS */
function renderReminders() {
    loadReminders();

    let container = document.getElementById("reminderList");
    container.innerHTML = "";

    remindersData[today].forEach((reminder, index) => {

        let div = document.createElement("div");
        div.className = "reminder";

        div.innerHTML = `
            ${reminder}
            <span class="deleteReminder" onclick="deleteReminder(${index})">✖</span>
        `;

        container.appendChild(div);
    });
}

/* ADD */
function addReminder() {
    let text = prompt("Enter reminder");
    if (!text) return;

    remindersData[today].push(text);
    renderReminders();
}

/* DELETE */
function deleteReminder(index) {
    remindersData[today].splice(index, 1);
    renderReminders();
}

/* CALL ON LOAD */
window.addEventListener("load", () => {
    renderReminders();
});