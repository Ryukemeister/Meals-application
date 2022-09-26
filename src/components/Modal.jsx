import React from "react";
import { useGlobalContext } from "../Context";

function Modal() {
  const { setShowModal } = useGlobalContext();

  function closeModal() {
    setShowModal(false);
  }

  return (
    <aside className="fixed transition-[0.3s ease-in-out all] top-0 left-0 w-[100%] h-[100%] grid z-50 place-content-center bg-[rgba(0,0,0,0.85)]">
      <div className="w-[80vw] max-w-[800px] h-[80vh] overflow-scroll bg-white rounded-sm">
        <h1>Modal component</h1>
        <button
          onClick={closeModal}
          className="bg-red-500 text-white mr-3 font-medium px-3 py-[2px] text-base rounded-full shadow-md hover:bg-red-700 transition-[0.3s ease-in-out all]"
        >
          Close
        </button>
      </div>
    </aside>
  );
}

export default Modal;
