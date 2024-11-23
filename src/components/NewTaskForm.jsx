import Button from "./Button";

const NewTaskForm = () => {
  return (
    <div className="border border-purple-500 rounded-xl p-2 flex flex-col items-center w-full">
        <h1 className="font-bold my-1">Add New Task</h1>
        <form className="w-full">
            {/* Title */}
            <div className="mb-3 flex flex-col items-center">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" className="bg-black border border-white rounded-lg min-w-96 py-1 px-3" />
            </div>
            {/* Description */}
            <div className="mb-3 flex flex-col items-center">
                <label htmlFor="desc" className="mx-3">Description</label>
                <textarea rows="5" id="desc" name="desc" className="bg-black border border-white rounded-lg min-w-96 py-1 px-3" />
            </div>
        </form>
        <div>
          <Button text="Add"></Button>
          <Button text="Cancel"></Button>
        </div>
    </div>
  )
};

export default NewTaskForm