const NewTaskForm = () => {
  return (
    <div className="border border-green-500 rounded-lg p-2 w-2/3">
        <h1 className="text-center font-bold my-1">Add New Task</h1>
        <form>
            <div className="mb-3">
                <label htmlFor="title" className="mx-3">Title</label>
                <input type="text" id="title" name="title" className="bg-black border border-white rounded-lg" />
            </div>
            <div className="mb-3">
                <label htmlFor="desc" className="mx-3">Description</label>
                <textarea rows="5" id="desc" name="desc" className="bg-black border border-white rounded-lg w-5/6" />
            </div>
        </form>
    </div>
  )
};

export default NewTaskForm