import { DATE_FORMAT, TIME_FORMAT } from "../../constants";
import { Dispatch, FC, SetStateAction } from "react";
import { DateInput } from "rsuite";
import "./index.scss";

export type TimeRangeProps = {
  variant: "time" | "date";
  from?: Date;
  to: Date;
  setFrom: Dispatch<SetStateAction<Date>>;
};

const TODAY = new Date();

export const TimeRange: FC<TimeRangeProps> = ({ variant, from, to, setFrom }) => {
  const isDate = variant === "date";
  const format = isDate ? DATE_FORMAT : TIME_FORMAT;
  const defaultValue = isDate ? TODAY : new Date(TODAY.setHours(7, 0));

  const handleChange = (v: Date | null) => {
    if (!v) return;
    setFrom(v);
  }

  return (
    <div className="time-range">
      <div className="time-range__value">
         <DateInput value={from} format={format} defaultValue={defaultValue} onChange={handleChange}/>
      </div>
      <div className="time-range__divider">до</div>
      <div className="time-range__value">
         <DateInput value={to} format={format} />
      </div>
    </div>
  );
};
