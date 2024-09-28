import { FC, PropsWithChildren } from "react";

export const ModalBody: FC<PropsWithChildren> = ({ children }) => {
  return <div className="modal-body">{children}</div>;
};
