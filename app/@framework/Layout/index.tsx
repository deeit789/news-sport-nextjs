import React, { CSSProperties, lazy, ReactNode, Suspense } from "react";
import styles from "./fwLayout.module.css";

const ItemLayout = lazy(() => import("./ItemLayout"));

type TypeProps = {
  layout: {
    element: any;
    style?: CSSProperties;
    className?: any;
    onHover?: Function;
    onClick?: Function;
    onContext?: Function;
    id?: any;
    lazy?: any;
    render?: Function;
  }[];
  className?: any;
  style?: CSSProperties;
  onScrollBottom?: Function;
};

const Layout = ({
  layout = [
    {
      element: "",
      style: {},
      className: "",
      onHover: () => {},
      onClick: () => {},
      onContext: () => {},
      id: "",
      lazy: "",
      render: () => {},
    },
  ],
  className = "",
  style = {},
  onScrollBottom = () => {},
}: TypeProps) => {
  const getClassName = (ca: any) => {
    return ca;
  };
  return (
    <div className={getClassName(className)} style={style}>
      {layout &&
        layout.map((val: any, key: any) => {
          return (
            <Suspense key={key} fallback={<>{val.lazy}</>}>
              <ItemLayout key={key} val={val} />
            </Suspense>
          );
        })}
    </div>
  );
};

export default Layout;
