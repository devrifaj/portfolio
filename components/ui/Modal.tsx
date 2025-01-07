import { RiCloseLargeFill } from "react-icons/ri";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 bg-blur-lg"

    >
      <div className="relative w-full max-w-xl p-6 rounded-lg shadow-2xl bg-bg-5">
        <button
          className="absolute top-4 right-5 text-neutral-0"
          onClick={onClose}
          aria-label="Close modal"
        >
          <RiCloseLargeFill size={20} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
