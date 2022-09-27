import React from "react";
import { useGlobalContext } from "../Context";

function Modal() {
  const { closeModal, selectedMeal } = useGlobalContext();
  const {
    idMeal: id,
    strMeal: title,
    strInstructions: instructions,
    strMealThumb: img,
  } = selectedMeal;
  console.log(selectedMeal);
  return (
    <aside className="fixed transition-[0.3s ease-in-out all] top-0 left-0 w-[100%] h-[100%] grid z-50 place-content-center bg-[rgba(0,0,0,0.85)]">
      <div className="w-[80vw] max-w-[800px] h-[80vh] overflow-scroll bg-white rounded-sm">
        <img
          className="w-[100%] h-[65%] object-center object-cover"
          src={img}
          alt="Modal meal image"
        />
        <h1 className="font-semibold font-mono text-xl pl-3 pt-2">
          <span className="pr-[3.5px]">-</span>
          {title}
        </h1>
        <p className="px-4 py-1">{instructions}</p>
        <button
          onClick={closeModal}
          className="bg-red-500 text-white mr-3 font-medium px-3 py-1 mx-3 my-2 text-base rounded-full shadow-md hover:bg-red-700 transition-[0.3s ease-in-out all]"
        >
          Close
        </button>
      </div>
    </aside>
  );
}

export default Modal;
