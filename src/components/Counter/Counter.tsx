import { FC, Dispatch, SetStateAction } from "react";
import { Button } from "../Button/Button";
import "./index.scss";

export type CounterProps = {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
  label: string;
  step?: number;
};

export const Counter: FC<CounterProps> = ({ value, setValue, step = 1, label }) => {
  const handleIncrement = () => {
    setValue(prev => prev + step);
  };

  const handleDecrement = () => {
    if (value === 0) return;
    setValue(prev => prev - step);
  };

  return (
    <div className="counter">
      <Button variant="contained" onClick={handleDecrement}>-</Button>
      <div className="counter-value">{value}</div>
      <div className="counter-label">{label}</div>
      <Button variant="contained" onClick={handleIncrement}>+</Button>
    </div>
  );
};
