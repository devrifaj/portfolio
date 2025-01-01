import { useState } from "react";
import Modal from "./Modal";
import { RiDeleteBin5Line } from "react-icons/ri";

const DeleteConfirmation = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  return (
    <>
      <button onClick={handleOpenModal}>
        <RiDeleteBin5Line />
      </button>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h5>Are you sure you want to delete?</h5>

        <div className="flex gap-6 text-base justify-end mt-6">
          <button onClick={handleCloseModal}>Cancel</button>
          <button
            className="px-2 py-2 text-white bg-red-600 rounded hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </Modal>
    </>
  );
};

export default DeleteConfirmation;
