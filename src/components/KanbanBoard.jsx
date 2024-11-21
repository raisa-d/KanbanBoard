import { MdModeEdit } from "react-icons/md";
import Column from "./Column";

const KanbanBoard = ({ title="My Kanban Board" }) => {
    return (
        <div className="text-white">
            {/* ***User will name this/be able to edit it */}
            <div className="flex items-center justify-center">
                <h1 className="border-b border-white text-lg my-3">{ title }</h1>
                <MdModeEdit className="ml-1 cursor-pointer"/>
            </div>
            <div>
                <Column title="To Do"/>
                <Column title="In Progress"/>
                <Column title="Done"/>
            </div>
        </div>
    )
};

export default KanbanBoard