import { useState } from "react";
import { MdModeEdit } from "react-icons/md";
import Column from "./Column";

const KanbanBoard = ({ setOpenModal }) => {
    const [boardTitle, setBoardTitle] = useState('My Kanban Board');
    const [isEditing, setIsEditing] = useState(false);
    
    function handlePencilClick() {
        setIsEditing(true);
    }

    function handleTitleSubmit(event) {
        event.preventDefault();
        setIsEditing(false);
    }

    function handleTitleChange(event) {
        setBoardTitle(event.target.value);
    }

    return (
        <div className="text-white flex flex-col items-center">
            {/* ***User will name this/be able to edit it */}
            <div className="flex items-center justify-center">
                {/* if user is editing title, show form else show read-only version */}
                {isEditing ? (
                    <form onSubmit={handleTitleSubmit}>
                        <label htmlFor="boardTitle"></label>
                        <input 
                            type="text" 
                            name="boardTitle" 
                            placeholder="My Kanban Board" 
                            value={boardTitle}
                            onChange={handleTitleChange}
                            className="bg-black border-b border-white text-lg my-3 text-center"/>
                    </form>
                ) : (
                        <h1 className="border-b border-white text-lg my-3">{ boardTitle }</h1>
                        )}
                <MdModeEdit className="ml-1 cursor-pointer" onClick={handlePencilClick}/>
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