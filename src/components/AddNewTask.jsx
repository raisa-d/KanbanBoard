import { GoPlusCircle } from "react-icons/go";

export default function AddNewTask({ setOpenModal }) {
    
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