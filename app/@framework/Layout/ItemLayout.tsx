import { SizeOfElement } from "@function";
import React, { useEffect, useRef, useState } from "react";

const ItemLayout = (props: any) => {
  const { val } = props;
  const refs = useRef<any>();
  const [mouse, setMouse] = useState<any>({
    x: 0,
    y: 0,
  });

  const getSize = (element: any) => {
    return {
      ...SizeOfElement(element.target),
      mouseLeft: mouse.x,
      mouseTop: mouse.y,
      event: element,
      element: element.target,
    };
  };
  const onClick = (e: any) => {
    if (e.type === "click") {
      if (val.onClick) {
        val.onClick({ ...getSize(e), hover: undefined });
      }
    } else if (e.type === "contextmenu" || e.nativeEvent.which === 3) {
      if (val.onContext) {
        val.onClick({ ...getSize(e), hover: undefined });
      }
    }
  };
  const onMouse = (e: any, visible: any) => {
    if (val.onHover) {
      val.onHover({ ...getSize(e), hover: visible });
    }
  };

  useEffect(() => {
    const handleWindowMouseMove = (event: any) => {
      setMouse({
        x: event.screenX,
        y: event.screenY,
      });
    };
    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  }, []);
  return (
    <div
      onClick={(e: any) => onClick(e)}
      onContextMenu={(e: any) => onClick(e)}
      onMouseEnter={(e: any) => onMouse(e, true)}
      onMouseLeave={(e: any) => onMouse(e, false)}
      ref={refs}
      style={val.style}
      className={val.className}
      id={val.id}
    >
      {val.element}
      {val.render}
    </div>
  );
};

export default ItemLayout;
