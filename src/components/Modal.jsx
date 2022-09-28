import React from "react";
import { useGlobalContext } from "../Context";

function Modal() {
  const { closeModal, selectedMeal } = useGlobalContext();
  const {
    idMeal: id,
    strMeal: title,
    strInstructions: text,
    strMealThumb: img,
    strSource: source,
    strYoutube: videoLink,
  } = selectedMeal;
  // console.log(selectedMeal);
  return (
    <aside className="fixed transition-[0.3s ease-in-out all] top-0 left-0 w-[100%] h-[100%] grid z-50 place-content-center bg-[rgba(0,0,0,0.85)]">
      <div className="w-[80vw] max-w-[800px] h-[80vh] overflow-scroll bg-white rounded-sm">
        <img
          className="w-[100%] h-[65%] object-center object-cover"
          src={img}
          alt="Modal meal image"
        />
        <h1 className="font-medium text-2xl pl-4 pt-2">{title}</h1>
        <p className="px-4 pt-1 text-gray-600 text-lg">Cooking instructions</p>
        <p className="px-4 py-1 text-gray-600">{text}</p>
        <div className="py-1">
          <a
            className="underline text-blue-500 max-w-[90px] px-0 ml-4 mr-8 pb-1 hover:text-black transition-[0.3s ease-in-out all]"
            href={source}
            target="_blank"
          >
            Original link
          </a>
          <a
            href={videoLink}
            className="underline text-blue-500 max-w-[90px] px-0 ml-4 pb-1 hover:text-black transition-[0.3s ease-in-out all]"
            target="_blank"
          >
            Video tutorial
          </a>
        </div>
        <button
          onClick={closeModal}
          className="bg-red-500 text-white mr-3 font-medium px-3 py-1 mx-3 my-2 text-base rounded-md shadow-md hover:bg-red-700 transition-[0.3s ease-in-out all]"
        >
          Close
        </button>
      </div>
    </aside>
  );
}

export default Modal;
