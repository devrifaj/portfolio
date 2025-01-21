import { useState, useTransition } from "react";
import Modal from "../ui/Modal";
import { MdDelete } from "react-icons/md";

interface DeleteConfirmationProps {
  onConfirm: () => void;
  title: string;
}

const DeleteConfirmation = ({
  onConfirm,
  title = "Are you sure want to delete?",
}: DeleteConfirmationProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const handleConfirm = async () => {
    startTransition(() => {
      onConfirm();
      handleCloseModal();
    });
  };

  return (
    <>
      <button
        className="text-neutral-0 hover:text-red-700"
        onClick={handleOpenModal}
      >
        <MdDelete size={24} />
      </button>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h4>{title}</h4>

        <div className="flex gap-6 text-base justify-end mt-6">
          <button onClick={handleCloseModal} className="text-neutral-0">
            Cancel
          </button>

          <button
            onClick={handleConfirm}
            className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none"
            disabled={isPending}
          >
            {isPending ? "Deleting" : "Delete"}
          </button>
        </div>
      </Modal>
    </>
  );
};

export default DeleteConfirmation;
