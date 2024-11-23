import { useState } from "react";
import KanbanBoard from "./components/KanbanBoard";
import NewTaskForm from "./components/NewTaskForm";

function App() {
  // openModal state
  const [openModal, setOpenModal] = useState(false);
  
  return (
    <div className="text-white">
      <KanbanBoard setOpenModal={setOpenModal}></KanbanBoard>
      {openModal && (
        <NewTaskForm openModal={openModal} setOpenModal={setOpenModal}></NewTaskForm>
      )}
    </div>
  )
}

export default App