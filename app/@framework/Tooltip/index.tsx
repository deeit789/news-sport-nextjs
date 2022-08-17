import React, { ReactNode, useEffect, useRef, useState } from "react";
import styles from "./fwTooltip.module.css";

type TypeProps = {
  children: ReactNode;
  content: ReactNode;
  width: Number;
};

const Tooltip = ({ children, content, width }: TypeProps) => {
  const [open, setOpen] = useState(true);
  const [classs, setClasss] = useState("");
  const ref = useRef<any>();
  useEffect(() => {
    if (ref.current) {
      const { top, width } = ref.current.getBoundingClientRect();
      if (width < 250) {
      }
    }
  }, [ref.current]);
  return (
    <div
      ref={ref}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(true)}
      className={styles["fwTooltip"]}
    >
      {children}
      {open && (
        <div style={{ width: `${width}px` }} className={styles["fwTooltip-item"]}>
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
