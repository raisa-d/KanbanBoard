import NewTaskForm from "./NewTaskForm";
import { MdModeEdit } from "react-icons/md";
import Column from "./Column";

const KanbanBoard = ({ title }) => {
    return (
        <div className="text-white">
            {/* ***User will name this/be able to edit it */}
            <div className="flex items-center justify-center">
                <h1 className="border-b border-white text-lg my-3">{ title }</h1>
                <MdModeEdit className="ml-1"/>
            </div>
            <Column title="To Do"/>
            <Column title="In Progress"/>
            <Column title="Done"/>
        </div>
    )
};

export default KanbanBoard