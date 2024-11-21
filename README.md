Kanban Board App built with React.

Installed using create vite@latest
Steps:
1. Break UI into component hierarchy
2. Build static version in React
3. Find the minimal but complete representation of UI state
4. Identify where your state should live
5. Add inverse data flow so user can change the data

## Development Stage/Log
Nov 21, 2024:
First, I made a wireframe on paper of the MVP for this app. Then, I did step 1 and broke the UI into a component hierarchy:
App
KanbanBoard
|-ColorPicker
|-Column (title, color, tasks)
|--TaskCard (task name, description)
|--NewTaskForm
Now, I am working on Step 2, building a static version in React. I have chosen to build it top-down since this is a simple app.
I am using *** for comments instructing me to come back and add more functionality or a specific design to it.

To do later:
- Let users change Kanban board name
- Add pointer on hover to the three dots/drag and drop
- Do mobile-first style
- Add drag and drop functionality
- Refine style

Future directions:
- Add color picker for each column background, put picker to right of column title
- Allow toggle dark/light mode