import { GoPlusCircle } from "react-icons/go";

export default function AddNewTask() {
    // function to open modal
    function handleClick() {
        alert('the modal is open')
    };

    return (
        <div className="flex items-center m-2 cursor-pointer" onClick={handleClick}>
            <p>Add New Task</p>
            <GoPlusCircle className="ml-2 text-lg hover:text-pink-500"/>
        </div>
    )
}