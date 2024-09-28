import { FC, PropsWithChildren } from "react";
import "./index.scss";

export const Modal: FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className="modal-overlay">
      <div className="modal">{children}</div>
    </div>
  );
};
