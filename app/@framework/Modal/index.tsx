import React, { useEffect } from "react";
import { ReactNode } from "react";
import ReactDOM from "react-dom/client";
import style from "./Modal.module.css";

type TypeProps = {
  element: ReactNode;
  open: Boolean;
};

const Modal = ({ element, open }: TypeProps) => {
  var root;
  useEffect(() => {
    let ele = document.getElementById("__modal") as HTMLElement;
    if (open) {
      document.body.style.overflowY = "hidden"
      root = ReactDOM.createRoot(ele).render(
        <React.StrictMode>
          <div className={style.loadding}>{element}</div>
        </React.StrictMode>
      );
    } else {
      document.body.style.overflowY = "overlay"
      root = ReactDOM.createRoot(ele).render(
        <React.StrictMode></React.StrictMode>
      );
    }
  }, [open]);

  return root;
};

export default Modal;
