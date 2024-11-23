import Button from "./Button";

const NewTaskForm = ({ openModal, setOpenModal }) => {
  function closeModal() {
    setOpenModal(false);
  }
  
  if (!openModal) return null;

  return (
    <div className="fixed top-0 bg-black bg-opacity-90 w-full h-full">
      <section className="border border-pink-500 rounded-xl p-2 flex flex-col items-center bg-pink-900/50 w-2/3">
        <h1 className="font-bold my-1">Add New Task</h1>
        <form>
            {/* Title */}
            <div className="mb-3 flex flex-col items-center">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" className="bg-black border border-white rounded-lg py-1 px-3" />
            </div>
            {/* Description */}
            <div className="mb-3 flex flex-col items-center">
                <label htmlFor="desc" className="mx-3">Description</label>
                <textarea rows="5" id="desc" name="desc" className="bg-black border border-white rounded-lg py-1 px-3" />
            </div>
        </form>
        <div>
          <Button text="Add"></Button>
          <Button text="Cancel" onClick={closeModal}></Button>
        </div>
      </section>
    </div>
  )
};

export default NewTaskForm