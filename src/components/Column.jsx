import TaskCard from "./TaskCard";
import { GoPlusCircle } from "react-icons/go";

const Column = ({ title }) => {
  return (
    <div className="border border-white rounded-xl min-h-min mx-6 mb-3 p-2">
        <h1 className="text-center font-bold">{ title }</h1>
        <TaskCard taskName='Research' taskDesc='Research kanban boards to figure out features'></TaskCard>
        <div className="flex items-center m-2 cursor-pointer">
            <p>Add New Task</p>
            <GoPlusCircle className="ml-2 text-lg hover:text-pink-500"/>
        </div>
    </div>
  )
}

export default Column