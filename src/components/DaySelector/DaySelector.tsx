import { FC, Dispatch, SetStateAction } from "react";
import { Button } from "../Button/Button";
import { DAYS_OF_WEEK } from "../../constants/daysOfWeek";
import "./index.scss"; 

export type DaySelectorProps = {
  selectedDays: string[];
  setSelectedDays: Dispatch<SetStateAction<string[]>>;
};

export const DaySelector: FC<DaySelectorProps> = ({
  selectedDays,
  setSelectedDays,
}) => {
  const toggleDay = (day: string) => {
    switch (day) {
      case "ПН/СР/ПТ":
        setSelectedDays(["ПН", "СР", "ПТ"]);
        break;
      case "ВТ/ЧТ":
        setSelectedDays(["ВТ", "ЧТ"]);
        break;
      default:
        if (selectedDays.includes(day)) {
          setSelectedDays(selectedDays.filter((d) => d !== day));
        } else {
          setSelectedDays([...selectedDays, day]);
        }
        break;
    }
  };

  return (
    <div className="day-selector">
      {DAYS_OF_WEEK.map((day) => (
        <Button
          key={day}
          className={`day-button ${
            selectedDays.includes(day) ? "selected" : ""
          }`}
          onClick={() => toggleDay(day)}
        >
          {day}
        </Button>
      ))}
    </div>
  );
};
