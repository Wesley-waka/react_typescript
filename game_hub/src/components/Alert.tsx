import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}
const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button className="btn-close" type="button" onClick={onClose}></button>
    </div>
  );
};

export default Alert;
