import React from "react";

type TypeProps = {
  form: {
    layout?: Number;
    label?: any;
    top?: any;
    bottom?: any;
    gap?: any;
    padding?: any;
    labelStyle?: any;
    layoutStyle?: any;
    itemStyle?: any;
    labelClassName?: any;
    layoutClassName?: any;
    itemClassName?: any;
    array: {
      name: String;
      label?: any;
      ouline?: Boolean;
      type:
        | "input"
        | "select"
        | "radio"
        | "checkbox"
        | "time"
        | "datetime"
        | "slide"
        | "button";
      value?: any;
    }[];
  }[];
};

const Form = ({ form }: TypeProps) => {
  return <div></div>;
};

export default Form;
