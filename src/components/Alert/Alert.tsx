import { FC, PropsWithChildren } from "react";
import "./index.scss";

export type AlertProps = {
  type: "success" | "warning" | "fail";
};

export const Alert: FC<PropsWithChildren<AlertProps>> = ({
  type,
  children,
}) => {
  return <div className={`alert ${type}`}>{children}</div>;
};
