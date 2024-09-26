import { X } from "lucide-react";
import "./Modal.scss";
import { Button } from "../Button/Button";

export const Modal = () => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Редактирование расписания</h2>
          <X className="modal-close" />
        </div>
        <div className="modal-body"></div>
        <div className="modal-footer">
          <div className="modal-controller">
            <Button variant="text">Отмена</Button>
            <Button variant="contained">Добавить расписание</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
