import { FC, MouseEvent, PropsWithChildren } from "react";
import "./index.scss";

export type ButtonProps = {
  handleClick?: (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => void;
  variant?: "contained" | "text";
};

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  handleClick,
  variant = "contained",
  children,
}) => {
  return (
    <button className={`button ${variant}`} onClick={handleClick}>
      {children}
    </button>
  );
};
