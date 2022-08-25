interface ModalProps{
  setIsModalOpen: (state: boolean) => void;
}

export function Modal({ setIsModalOpen }: ModalProps){
  return(
    <div className="overlay">
      <div className="modal">
        <button 
          type="button" 
          className="closeButton"
          onClick={() => setIsModalOpen(false)}
        >
          X
        </button>
        <h2>Modal</h2>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quasi iusto voluptatibus, natus quidem ullam? Corrupti molestias neque voluptates vitae.</span>
      </div>
    </div>
  )
}