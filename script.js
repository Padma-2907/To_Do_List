// Function to add a new task
function addTask() {
    var taskInput = document.getElementById("new-task");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var taskList = document.getElementById("task-list");

        var listItem = document.createElement("li");
        listItem.textContent = taskText;

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            taskList.removeChild(listItem);
        };

        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        taskInput.value = "";
    }
}

// Motivational quotes
const quotes = ["Believe you can"];

// Display a random quote
function displayRandomQuote() {
    var quoteElement = document.getElementById("quote");
    var randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
}

// Call the function to display a random quote on page load
displayRandomQuote();

