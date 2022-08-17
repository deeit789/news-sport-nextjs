import React, { CSSProperties, useEffect, useRef, useState } from "react";
import styles from "./Input.module.css";

type TypeProps = {
  className?: any;
  defaultValue?: any;
  value?: any;
  name?: any;
  id?: any;
  placeholder?: any;
  style?: CSSProperties;
  onChange?: Function;
  error?: Boolean;
};

const Input = ({
  className,
  value,
  defaultValue,
  id,
  name,
  placeholder,
  style,
  onChange,
  error,
}: TypeProps) => {
  const [values, setValues] = useState("");
  const ref = useRef<any>();

  //
  useEffect(() => {
    if (defaultValue) {
      setValues(defaultValue);
    }
  }, []);
  useEffect(() => {
    if (value) {
      setValues(value);
    }
  }, [value]);

  // Sự kiện
  const onChanges = (e: any) => {
    const { name, value } = e.target;
    setValues(value);

    if (onChange) {
      const { width, top, left, height, right, bottom } =
        ref.current.getBoundingClientRect();
      let resul = {
        size: {
          top: top,
          width: width,
          height: height,
          left: left,
          bottom: Number(document.body.clientHeight) - bottom,
          right: Number(document.body.clientWidth) - right,
        },
        event: e,
        name: name ? name : "",
        value: value,
        length: value.length,
        ref: ref.current,
        time: Date.now()
      };
      onChange(resul);
    }
  };
  return (
    <input
      name={name}
      id={id}
      value={values}
      style={style}
      className={`${styles.input} ${error ? styles.error : styles.normal} ${
        className ? className : ""
      }`}
      onChange={onChanges}
      placeholder={placeholder}
      ref={ref}
    />
  );
};

export default Input;
