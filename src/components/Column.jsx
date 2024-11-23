import TaskCard from "./TaskCard";
import AddNewTask from "./AddNewTask";

const Column = ({ title }) => {
  
  return (
    <div className="border border-white rounded-xl min-h-32 mb-3 p-2">
        <h1 className="text-center font-bold">{ title }</h1>
        {/* <TaskCard taskName='Research' taskDesc='Research kanban boards to figure out features'></TaskCard> */}

        {/* Render "Add New Task" only if the column is "To Do" */}
        {title === "To Do" && (
          <AddNewTask/>
        )}
    </div>
  )
}

export default Column