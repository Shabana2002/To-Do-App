# ToDo Web Application

## Project Overview:
This project is a simple ToDo web application built using HTML, CSS, and JavaScript. It allows users to manage their daily tasks efficiently through a clean and interactive interface.

## Features Implemented:

1. Add Task:
Users can enter a task in the input field and click the "Add" button or press Enter to add it to the list.

2. Mark Task as Completed:
Clicking on a task marks it as completed. Completed tasks are visually indicated with a line-through style.

3. Delete Task:
Each task has a delete button that allows users to remove it from the list.

4. Task Counter:
The application displays:
- Total number of tasks
- Number of completed tasks

5. Data Persistence:
All tasks are stored in the browser using localStorage. This ensures that tasks remain saved even after refreshing the page.

## How It Works:
- Tasks are stored as objects in an array with two properties: text and completed.
- When a user performs an action (add, delete, complete), the array is updated.
- The updated data is saved to localStorage.
- The UI is re-rendered dynamically to reflect the latest state.

## Technologies Used:
- HTML for structure
- CSS for styling
- JavaScript for functionality and logic

## Conclusion:
This project demonstrates basic front-end development concepts including DOM manipulation, event handling, and browser storage. It is designed to be simple, user-friendly, and functional.
