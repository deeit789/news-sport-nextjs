import {reState}  from "@useState/ReState";
import React, { useContext } from "react";
import style from "./Notify.module.css";

const Notify = ({ open, setOpen }) => {
  const {state, setState} = useContext(reState);
  return (
    <>
      {open && (
        <div  className={style.notify}>
          <div className={style.notifyBox}> Hahhaah</div>
        </div>
      )}
    </>
  );
};

export default Notify;
