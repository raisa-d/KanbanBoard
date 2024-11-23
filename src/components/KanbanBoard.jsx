import { MdModeEdit } from "react-icons/md";
import Column from "./Column";

const KanbanBoard = ({ title="My Kanban Board", setOpenModal }) => {
    return (
        <div className="text-white flex flex-col items-center">
            {/* ***User will name this/be able to edit it */}
            <div className="flex items-center justify-center">
                <h1 className="border-b border-white text-lg my-3">{ title }</h1>
                <MdModeEdit className="ml-1 cursor-pointer"/>
            </div>
            <div className="w-2/3">
                <Column title="To Do" setOpenModal={setOpenModal}/>
                <Column title="In Progress"/>
                <Column title="Done"/>
            </div>
        </div>
    )
};

export default KanbanBoard