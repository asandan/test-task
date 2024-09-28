import { X } from "lucide-react";
import { FC } from "react";

export type ModalHeaderProps = {
  title: string;
  onClose: () => void;
};

export const ModalHeader: FC<ModalHeaderProps> = ({ title, onClose }) => {
  return (
    <div className="modal-header">
      <h2 className="modal-header-title">{title}</h2>
      <X className="modal-close" onClick={onClose} />
    </div>
  );
};
