import { FC, MouseEvent, PropsWithChildren } from "react";
import "./index.scss";

export type ButtonProps = {
  onClick?: (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => void;
  variant?: "contained" | "text";
  className?: string;
};

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  onClick,
  variant = "contained",
  children,
  className = "",
}) => {
  return (
    <button className={`button ${variant} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
