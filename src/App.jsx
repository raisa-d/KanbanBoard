import { useState } from "react";
import KanbanBoard from "./components/KanbanBoard";
import NewTaskForm from "./components/NewTaskForm";
import Column from "./components/Column";

function App() {
  // openModal state
  const [openModal, setOpenModal] = useState(false);
  
  return (
    <div className="text-white">
      <KanbanBoard setOpenModal={setOpenModal}>
        <Column title="To Do" setOpenModal={setOpenModal}/>
        <Column title="In Progress"/>
        <Column title="Done"/>
      </KanbanBoard>
      {openModal && (
        <NewTaskForm openModal={openModal} setOpenModal={setOpenModal}></NewTaskForm>
      )}
    </div>
  )
}

export default App