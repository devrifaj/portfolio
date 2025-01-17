import { RiCloseLargeFill } from "react-icons/ri";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        className={`relative w-full max-w-2xl p-10 rounded-lg shadow-xl bg-bg-5 transform transition-all ${
          isOpen ? "scale-100 opacity-100 animate-fadeIn visible" : "scale-95 opacity-0 invisible"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-neutral-0 transition"
          onClick={onClose}
          aria-label="Close modal"
          type="button"
        >
          <RiCloseLargeFill size={24} />
        </button>

        {/* Modal Content */}
        <div className="mt-2 text-gray-800">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
