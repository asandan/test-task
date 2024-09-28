import { Button } from "../../../components/Button/Button";
import { FC } from "react";

export type ModalFooterProps = {
  handleCancel?: () => void;
  handleSubmit?: () => void;
};

export const ModalFooter: FC<ModalFooterProps> = ({
  handleCancel,
  handleSubmit,
}) => {
  return (
    <div className="modal-footer">
      <div className="modal-controller">
        <Button variant="text" onClick={handleCancel}>Отмена</Button>
        <Button variant="contained" onClick={handleSubmit}>Добавить расписание</Button>
      </div>
    </div>
  );
};
