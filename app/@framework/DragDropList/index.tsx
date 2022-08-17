import React, { CSSProperties, useEffect, useState } from "react";

type TypeProps = {
  render: Function; //Render ra màn hình thứ mình muốn thể hiện
  style?: CSSProperties;
  className?: any;
  data: any; //Data phải là
  setData: any;
};

const DragDropList = ({
  render,
  style,
  className,
  data,
  setData,
}: TypeProps) => {
  return <div className={className} style={style}></div>;
};

export default DragDropList;
