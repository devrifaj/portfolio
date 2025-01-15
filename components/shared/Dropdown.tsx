"use client";

import { useEffect, useState } from "react";
import { FieldError } from "react-hook-form";
import { FaAngleDown } from "react-icons/fa6";
import { RiCloseFill } from "react-icons/ri";
import Modal from "../ui/Modal";
import { DropdownProps } from "@/types";
import toast from "react-hot-toast";

const Dropdown = ({
  register,
  setValue,
  errors,
  setSelectedOptions,
  selectedOptions,
}: DropdownProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [technologies, setTechnologies] = useState<
    { _id: string; name: string }[]
  >([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [newTechnology, setNewTechnology] = useState("");
  const [loading, setLoading] = useState(false); // State for new technology adding loading

  // Fetching technologies
  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        const response = await fetch(
          "/api/adminProfile/projects/formTechnologies"
        );

        if (response.ok) {
          const data = await response.json();
          setTechnologies(data.technologies);
        }
      } catch (error) {
        console.log("Error while fetching technologies", error);
      }
    };

    fetchTechnologies();
  }, []);

  const handleCloseModal = () => {
    setNewTechnology("");
    setModalOpen(false);
  };

  // Handling the selection of technology
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

  const handleAddNewTechnology = async () => {
    if (!newTechnology.trim()) {
      toast.error("Technology name cannot be empty.");
      return;
    }

    if (
      technologies.some(
        (tech) => tech.name.toLowerCase() === newTechnology.trim().toLowerCase()
      )
    ) {
      toast.error("Technology already exists.");
      return;
    }

    setLoading(true);
    // Adding new technology
    try {
      const response = await fetch(
        "/api/adminProfile/projects/formTechnologies",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: newTechnology }),
        }
      );

      if (response.ok) {
        const result = await response.json();

        setTechnologies((prev) => [...prev, result.formTechnology]);

        toast.success("New technology added successfully.");
        setNewTechnology("");
        setModalOpen(false);
        setLoading(false);
      }
    } catch (error) {
      toast.error("Error while adding new technology");
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      <input type="hidden" {...register("technologies")} />
      {/* Dropdown trigger button */}
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

      {/* The dropdown */}
      {dropdownOpen && (
        <div>
          <ul className="absolute bg-[#333a32] bg-neutral-1000 dark:bg-bg-3 border border-border-1 rounded-lg mt-2 shadow-lg z-20 w-full">
            {technologies.map((technology) => (
              <li
                key={technology._id}
                className="px-4 py-2 rounded-md cursor-pointer hover:text-primary-2 hover:bg-border-1"
                onClick={() => handleOptionSelect(technology.name)}
              >
                {technology.name}
              </li>
            ))}
            <li
              onClick={() => setModalOpen(true)}
              className="px-4 py-2 rounded-md cursor-pointer hover:bg-border-1 text-secondary-2"
            >
              Add new technology
            </li>
          </ul>
        </div>
      )}

      {/* Modal */}
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
            <button type="button" className="text-neutral-0" onClick={handleCloseModal}>
              Cancel
            </button>
            <button
              type="button"
              className="px-4 py-2 rounded-lg bg-primary-2 text-neutral-1000"
              onClick={handleAddNewTechnology}
              disabled={loading}
            >
              {loading ? "Adding..." : "Add"}
            </button>
          </div>
        </div>
      </Modal>

      {errors && "message" in errors && (
        <p className="form-validation-error">
          {(errors as FieldError).message}
        </p>
      )}

      {/* Selected technologies */}
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
