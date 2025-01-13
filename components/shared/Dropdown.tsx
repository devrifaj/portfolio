"use client";

import { technologies } from "@/data";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { RiCloseFill } from "react-icons/ri";
import Modal from "../ui/Modal";

const Dropdown = ({ register, setValue, errors }: DropdownProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [newTechnology, setNewTechnology] = useState("");

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => {
    setNewTechnology("");
    setModalOpen(false);
  };

  const handleOptionSelect = (option: string) => {
    if (!selectedOptions.includes(option)) {
      const updatedOptions = [...selectedOptions, option];
      setSelectedOptions(updatedOptions);
      setValue("technologies", updatedOptions, { shouldValidate: true });
    }
    setDropdownOpen(false);
  };

  const handleRemoveOption = (option: string) => {
    const updatedOptions = selectedOptions.filter((item) => item !== option);
    setSelectedOptions(updatedOptions);
    setValue("technologies", updatedOptions, { shouldValidate: true });
  };

  const handleAddNewTechnology = () => {
    console.log(newTechnology);
  };

  return (
    <div className="relative">
      <input type="hidden" {...register("technologies")} />
      <button
        type="button"
        className={`bg-bg-3 h-[58px] border rounded-lg px-4 flex-between w-full ${
          dropdownOpen ? "border-neutral-800" : "border-border-1"
        }`}
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        Technologies
        <FaAngleDown />
      </button>

      {dropdownOpen && (
        <div>
          <ul className="absolute bg-[#333a32] bg-neutral-1000 dark:bg-bg-3 border border-border-1 rounded-lg mt-2 shadow-lg z-20 w-full">
            {technologies.map((technology) => (
              <li
                key={technology.id}
                className="px-4 py-2 rounded-md cursor-pointer hover:text-primary-2 hover:bg-border-1"
                onClick={() => handleOptionSelect(technology.name)}
              >
                {technology.name}
              </li>
            ))}
            <li
              onClick={handleOpenModal}
              className="px-4 py-2 rounded-md cursor-pointer hover:bg-border-1 text-secondary-2"
            >
              Add new technology
            </li>
          </ul>
        </div>
      )}

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h5>New Technology</h5>

        <div>
          <input
            className="form-control"
            type="text"
            placeholder="Technology Name"
            value={newTechnology}
            onChange={(e) => setNewTechnology(e.target.value)}
          />
          <div className="flex justify-end gap-6 mt-6 text-base">
            <button type="button" onClick={handleCloseModal}>
              Cancel
            </button>
            <button
              type="button"
              className="px-4 py-2 rounded-lg bg-primary-2 text-neutral-1000"
              onSubmit={handleAddNewTechnology}
            >
              Add
            </button>
          </div>
        </div>
      </Modal>

      {errors && <p className="form-validation-error">{errors.message}</p>}

      {selectedOptions.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 mt-2">
          {selectedOptions.map((option) => (
            <div
              key={option}
              className="gap-2 px-3 py-1 border rounded-full shadow-sm flex-center bg-bg-3 border-border-1 text-neutral-0"
            >
              <span>{option}</span>
              <button
                type="button"
                className="text-gray-500 hover:text-red-500"
                onClick={() => handleRemoveOption(option)}
              >
                <RiCloseFill />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
