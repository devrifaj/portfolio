import { RiCloseLargeFill } from "react-icons/ri";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleOverlayClick}
    >
      <div className="relative w-full max-w-xl p-6 bg-bg-3 rounded-lg shadow-lg">
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
