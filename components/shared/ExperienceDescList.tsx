"use client";
import { useState } from "react";
import Modal from "../ui/Modal";

interface ExperienceDescListProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (desc: { text: string; highlight?: string }) => void;
}

const ExperienceDescList = ({
  isOpen,
  onClose,
  onSubmit,
}: ExperienceDescListProps) => {
  const [desc, setDesc] = useState("");
  const [highlight, setHighlight] = useState("");
  const [error, setError] = useState("");

  const handleSave = () => {
    if (!desc.trim()) {
      setError("Description is required");
      return;
    }
    setError("");

    onSubmit({ text: desc, highlight: highlight || undefined });
    setDesc("");
    setHighlight("");
    onClose();
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDesc(e.target.value);
    if (error) setError("");
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h5>Add Description</h5>

      <textarea
        className="form-control w-full p-2 border rounded"
        placeholder="Enter description"
        value={desc}
        onChange={handleTextChange}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}

      <input
        className="form-control w-full p-2 border rounded mt-2"
        placeholder="Highlight (optional)"
        value={highlight}
        onChange={(e) => setHighlight(e.target.value)}
      />

      <button
        type="button"
        onClick={handleSave}
        className="px-4 py-2 rounded-lg bg-primary-2 text-neutral-1000 disabled:opacity-50 disabled:pointer-events-none mt-4 w-full"
      >
        Add
      </button>
    </Modal>
  );
};

export default ExperienceDescList;
