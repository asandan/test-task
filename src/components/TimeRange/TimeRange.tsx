import "./index.scss";
import { FC } from "react";
import { DateInput } from "rsuite";

export type TimeRangeProps = {
  variant: "time" | "date";
};

export const TimeRange: FC<TimeRangeProps> = ({ variant }) => {
  return (
    <div className="time-range">
      <div className="time-range__value">
        {variant === "date" ? <DateInput format="dd.MM.yyyy"  /> : 10}
      </div>
      <div className="time-range__divider">до</div>
      <div className="time-range__value">
        {variant === "date" ? <DateInput format="dd.MM.yyyy" /> : 10}
      </div>
    </div>
  );
};
