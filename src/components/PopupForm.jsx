"use client";
import { useEffect, useCallback, useRef } from "react";
import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import ContactUsForm2 from "./ContactUsForm2";
const PopupForm = ({ setShowModal, showModal }) => {
  // useRef to store intervalId
  const intervalIdRef = useRef(null);

  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      setShowModal(true);
      document.body.style.overflow = "hidden";
    }, 30 * 1000);

    // Cleanup the interval when the component unmounts or modal is closed
    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, [setShowModal]);

  const closeModal = useCallback(() => {
    setShowModal(false);
    document.body.style.overflow = "auto"; // Restore scrolling

    // Clear the interval when the modal is closed
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = null; // Reset the ref
    }
  }, [setShowModal]);

  return (
    <>
      {showModal && (
        <section className="fixed z-50 w-full h-screen bg-[rgb(0,0,0)] bg-opacity-70 top-0 left-0">
          <article className="flex justify-center items-center h-full">
            <div
              className={`flex flex-col gap-3 max-w-[400px] w-full shadow-2xl p-4 relative rounded-lg transform transition-transform duration-500 ease-in-out ${showModal ? "scale-100" : "scale-95"}`}
            >
              <button
                onClick={closeModal}
                className="absolute top-[22px] lg:top-0 right-[3px] w-8 h-8 flex justify-center items-center text-lg rounded-full bg-[#172519] hover:bg-[#29422C]/90 font-bold text-[#D5D5D5]"
              >
                <IoCloseSharp />
              </button>
              <ContactUsForm2 title={"Get Exclusive Offer Today!"} description={"Experience Luxury at EBC Mussoorie"} />
            </div>
          </article>
        </section>
      )}
      {/* {openPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-blue-dark bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded">
            <p>{popupMsg}</p>
            <button
              onClick={() => setOpenPopup(false)}
              className="mt-2 bg-blue-dark text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )} */}
    </>
  );
};

export default PopupForm;
