import {X} from "lucide-react";
import {FC, PropsWithChildren, useState} from "react";
import {Button} from "../Button/Button";
import {Counter} from "../Counter/Counter";
import {DaySelector} from "../DaySelector/DaySelector";
import {Select} from "../Select/Select";
import {TimeRange} from "../TimeRange/TimeRange";
import "./Modal.scss";

const data = [
  {
    label: "1",
    value: "1",
  },
  {
    label: "1",
    value: "1",
  },
  {
    label: "1",
    value: "1",
  },
  {
    label: "1",
    value: "1",
  },
];

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
  isOpen,
  onClose,
}) => {
  const [selectedDays, setSelectedDays] = useState(["ПН", "СР", "ПТ"]);
  const [totalHours, setTotalHours] = useState(0);
  const [hoursPerDay, setHoursPerDay] = useState(0);

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Редактирование расписания</h2>
          <X className="modal-close" />
        </div>
        <div className="modal-body">
          <Select size="lg" placeholder="Large" data={data} />
          <Counter value={totalHours} setValue={setTotalHours} label={"Всего часов"} />
          <TimeRange variant={"date"} />
          <DaySelector
            selectedDays={selectedDays}
            setSelectedDays={setSelectedDays}
          />
          <Select size="lg" placeholder="Large" data={data} />
          <Counter value={hoursPerDay} setValue={setHoursPerDay} step={0.5} label={"Часов в день"}/>
          <TimeRange variant={"date"}/>
        </div>
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
