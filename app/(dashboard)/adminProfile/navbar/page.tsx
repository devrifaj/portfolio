"use client";
import DashboardPageLayout from "@/components/shared/DashboardPageLayout";
import DeleteConfirmation from "@/components/shared/DeleteConfirmation";
import Modal from "@/components/shared/Modal";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";

const Page = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <DashboardPageLayout title="Navbar Dashboard">
      <div>
        <p className="mb-4 text-secondary-2">All nav links:</p>

        <ul className="flex flex-col gap-6">
          <li className="border border-border-1 rounded-lg px-4 py-3 md:text-lg flex-center gap-10">
            About me
            
            <div className="flex gap-6">
            <button onClick={handleOpenModal}>
              <FaRegEdit />
            </button>
            
            <DeleteConfirmation/>
            </div>
          </li>
        </ul>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2 className="text-lg font-bold">Modal Title</h2>
        <p className="mt-4">This is the modal content.</p>
        <button
          className="px-4 py-2 mt-6 text-white bg-red-600 rounded hover:bg-red-700"
          onClick={handleCloseModal}
        >
          Close
        </button>
      </Modal>
    </DashboardPageLayout>
  );
};

export default Page;
