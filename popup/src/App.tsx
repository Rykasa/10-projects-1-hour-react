import { useState } from "react";
import { Modal } from "./components/Modal";

export function App(){
  const [isModalOpen, setIsModalOpen] = useState(false);

  return(
    <div className="container">
      <button 
        type="button" 
        className="openButton"
        onClick={() => setIsModalOpen(true)}
      >
        Open
      </button>
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
    </div>
  )
}