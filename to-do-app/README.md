To-Do App (React)

gitHub Link ( https://github.com/sravanKumar1211/ToDo-App.git )


Project Overview

The To-Do App is a simple yet feature-rich React-based task management application that helps users organize daily activities efficiently.
It allows users to add, edit, delete, mark as complete, or mark as pending their tasks — all within an intuitive and responsive user interface.

The application demonstrates a clear understanding of React component design, state management, and props-driven communication between components.

 Key Objectives

To understand React functional components and props usage.

To implement state management using the useState() hook and Lifting of state.

To build a dynamic UI using the map() function to render lists.

To practice event handling (add, edit, delete, complete, pending).

To maintain a clean component hierarchy and reusable code structure.

 Features
✅ Task Management

Add new to-do items dynamically.

Edit existing tasks directly in the list.

Delete unwanted tasks easily.

Mark tasks as Completed or Pending.

Move tasks between Pending, To-Do, and Completed sections.

State Management

All tasks are stored in React states (useState).

State is lifted up to the main App component and passed down via props.

=> Component Architecture

Each functional component has a specific responsibility:

App.jsx — manages global state and logic.

Header.jsx — displays the navigation bar and app title.

ToDoList.jsx — handles input, adds new tasks, and renders active tasks.

ToDoItem.jsx — manages task display, editing, and actions (edit/delete/complete/pending).

=> User Interface

Clean, responsive design using custom CSS.

Visual distinction between Pending, To-Do, and Completed sections.

Intuitive buttons for each action.

Styled with smooth hover effects and consistent color themes.

=> Functionality Summary
Function	Description
Add Task	Users can add new tasks from the input box.
Edit Task	Allows editing existing tasks inline.
Delete Task	Removes a task from the list.
Mark as Complete	Moves a task to the “Completed” section.
Mark as Pending	Moves a task to the “Pending” section.
Clear Section	Deletes all tasks from a specific section.

=> Project Architecture
src/
 ├── App.jsx                # Root component, manages global state
 ├── App.css                # Global and layout styling
 └── components/
     ├── Header.jsx         # Displays application title/navigation
     ├── ToDoList.jsx       # Handles task input and rendering
     └── ToDoItem.jsx       # Handles individual task behavior

=>Technologies Used
Technology	Purpose
React.js (Vite)	Component-based UI framework
JavaScript (ES6)	Logic and interactivity
HTML5	Structure and rendering
CSS3	Styling and layout
Vite	Fast development and bundling tool


*****************************************************

=> How to Run the Project Locally

1️⃣ Clone the Repository
git clone ( https://github.com/sravanKumar1211/ToDo-App.git )
cd to-do-app

2️⃣ Install Dependencies
npm install

3️⃣ Start the Development Server
npm run dev


Then open your browser and visit:

http://localhost:5173/

*****************************************************************************************************

=> Component Descriptions

# App.jsx

Acts as the main controller of the app.

Maintains global states for:

todos

pending

completed

Passes state and action functions (addTask, editTask, deleteTask, etc.) as props to child components.

# ToDoList.jsx

Responsible for:

Handling the input field for new tasks.

Calling the parent’s addTask() method.

Rendering the list of all active to-dos dynamically using the map() function.

Uses props to receive task data and event handlers from App.

# ToDoItem.jsx

Represents a single to-do item.

Supports:

Inline editing (Edit, Save, Cancel).

Action buttons (Complete, Do Later, Delete).

Reactively updates the parent’s state through callback functions passed as props.

# Header.jsx

Displays a simple navigation bar with the app title.

Purely a UI component (no logic or state).

# UI & Styling

Color-coded sections:

=> Pending Tasks → Orange border

=> To-Do Tasks → Blue border

=> Completed Tasks → Green border

Buttons:

Color-coded actions (Edit, Delete, Complete, Do-Later).

Smooth hover transitions.

Responsive Design:

Layout adjusts automatically for mobile screens using CSS media queries.

=> React Concepts Demonstrated

Concept	Explanation
State Management	Using useState() to store and update lists dynamically
Props Drilling	Passing data and functions from parent (App) to children (ToDoList, ToDoItem)
Conditional Rendering	Displaying inputs or task text based on isEditing state
List Rendering	Using map() to generate dynamic task lists
Event Handling	Handling click and input events with callbacks
Component Reusability	Using ToDoItem component for all sections

=> Example Workflow

Type a task in the input box → click Add Task.

Task appears in the To-Do section.

You can:

Click Edit to modify text.

Click Do Later to move it to Pending.

Click Complete to move it to Completed.

Click Delete to remove it permanently.

Use Clear buttons to remove all tasks in a section.



=> Author

Sravan Kumar
=> Built with ❤️ using React.js
=> “Organize your tasks, and you’ll organize your mind.”