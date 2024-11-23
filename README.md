<div align="center">
    <h1>Kanban Board</h1>
    <img src="/Kanban.png" height="400">
</div>

<p>
    Kanban Board allows users to create, manage, and organize tasks into customizable columns. Users can add new tasks, move them between columns (e.g., To Do, In Progress, Done) using drag-and-drop, and customize each column’s color. The app uses React for dynamic UI updates and local storage to persist data across sessions. This project demonstrates fundamental React concepts like state management, event handling, and working with local storage for persistence.
</p>

## Table of Contents
- [Technologies Used](#technologies-used)
- [Development Stage](#development-stage)
- [Features](#features)
- [Optimizations](#optimizations)
- [Lessons Learned](#lessons-learned)
- [Resources](#resources)
- [Contact](#contact)

## Technologies Used
<!-- React -->
<a href="https://react.dev/" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/react/react-original.svg" alt="React.js" width="40" height="40"/> 
</a> 

<!-- JS -->
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> 
</a> 

<!-- VITE -->
<a href="https://vite.dev/" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/vitejs/vitejs-original.svg" alt="Vite" width="40" height="40"/> 
</a> 

<!-- Tailwind -->
<a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/tailwindcss/tailwindcss-original.svg" alt="tailwindcss" width="40" height="40"/> 
</a> 

<!-- Nodejs -->
<a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/nodejs/nodejs-original.svg" alt="nodejs" width="40" height="40"/> 
</a> 

<a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> 
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> 
</a> 
<a href="https://git-scm.com/" target="_blank" rel="noreferrer"> 
  <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> 
</a>
<p>React.js, JavaScript, Vite, tailwindcss, Node.js, HTML, Git</p>

## Features
- Create Tasks: Add new tasks with a title and description.
- Drag-and-Drop: Move tasks between columns (e.g., To Do, In Progress, Done) using drag-and-drop functionality.
- Customizable Columns: Change the background color of each column to personalize the board.
- Persistence: Tasks and column data are saved in local storage, so your progress is preserved across page reloads.
- Mobile-first Design: The app is built to be responsive and works on both desktop and mobile devices.

## Development Stage

**Nov 23, 2024:**
Today, I went back to the React docs to refamiliarize myself with event handling using React. I am still deciding where the best place is to include the openModal state for adding a new task. 
As I started working on that, I realized I needed to add an Add/Close button to the new task form and style it as a modal.
I am trying to figure out where the state for the open modal should live. I have decided that NewTaskForm will be within the App component, since it is one modal across the whole app. The openModal will be triggered by clicking "Add new task" and the modal will be closed by clicking "cancel" or outside of the modal. So I will need to have openModal and setOpenModal live in App and pass them both down as props to NewTaskForm. Then I will pass only setOpenModal down thorugh KanbanBoard > Column > AddNewTask.

**Nov 21, 2024:**
- Started by creating a boilerplate React app using `create vite@latest`.

**Steps Taken:**
1. **Break UI into Component Hierarchy:**
   - Designed a wireframe of the MVP (Minimum Viable Product) for the Kanban board.
   - Broke the UI into a component hierarchy:
     - `App`
       - `KanbanBoard`
         - `ColorPicker`
         - `Column` (with title, color, tasks)
           - `TaskCard` (with task name, description)
         - `NewTaskForm`

2. **Build Static Version in React:**
   - Built a static version of the app top-down, starting with the layout and basic UI elements.
   - Added comments (*** in the code) to remind myself of areas to enhance, like adding more functionality or styling.

3. **Define the UI State:**
   - Identified the core data structure to manage the UI:
     - **Kanban board title**
     - **Array of columns** with properties: `id`, `title`, and `color`.
     - **Array of tasks** with `id`, `title`, `description`, and `status` (i.e., `toDo`, `inProgress`, `done`).
     - **Modal state** (`isModalOpen`) to control the visibility of the New Task Form.

## Next Steps
1. Implement functionality to open the `NewTaskForm` modal when the plus button is clicked.
2. Add state management for:
   - **Kanban board title**.
   - **Array of column objects** (id, title, color).
   - **Array of task objects** (id, title, description, status).
   - **`isModalOpen`** to manage the modal visibility.
3. Add drag and drop functionality
4. Refine styling

## Optimizations
- Add color picker for each column background, put picker to right of column title
- Allow toggle dark/light mode

## Lessons Learned
- Re-familiarized myself with the basics of **React**.
- Gained experience in breaking down a project into components and understanding how to structure the app for better maintainability.

## Resources
- [Tailwind Docs](https://tailwindcss.com/docs/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Docs](https://react.dev/)

## Contact
<p> 
  <a href="https://raisadorzback.netlify.app/" target="blank">
    <img src="https://img.shields.io/badge/Website-563d7c?&style=for-the-badge" alt="Website">
  </a>
  <a href="https://www.linkedin.com/in/raisa-d/">
    <img src="https://img.shields.io/badge/LinkedIn-046E6D?logo=linkedin&style=for-the-badge">
  </a>
  <a href="https://twitter.com/rai__bread" target="blank">
    <img src="https://img.shields.io/badge/Twitter-563d7c?logo=twitter&style=for-the-badge&logoColor=white" alt="rai__bread" />
  </a> 
</p>