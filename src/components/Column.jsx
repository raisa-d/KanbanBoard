import TaskCard from "./TaskCard";
import { GoPlusCircle } from "react-icons/go";

function AddNewTask({ setOpenModal }) {
    // function to open modal
    function handleClick() {
        if(setOpenModal) {
            setOpenModal(true);
        }
    };

    return (
        <div className="flex items-center m-2 cursor-pointer" onClick={handleClick}>
            <p>Add New Task</p>
            <GoPlusCircle className="ml-2 text-lg hover:text-pink-500"/>
        </div>
    )
}

export default function Column ({ title, setOpenModal }) {
  
  return (
    <div className="border border-white rounded-xl min-h-32 mb-3 p-2">
        <h1 className="text-center font-bold">{ title }</h1>
        {/* Task card here for now as example */}
        <TaskCard taskName='Research' taskDesc='Research kanban boards to figure out features'></TaskCard>
        {/* Render "Add New Task" only if the column is "To Do" */}
        {title === "To Do" && (
          <AddNewTask setOpenModal={setOpenModal}/>
        )}
    </div>
  )
}