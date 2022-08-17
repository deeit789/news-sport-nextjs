import { reState } from "@useState";
import React, { useEffect, useState } from "react";
import MenuMobile from "./MenuMobile";
import MenuPc from "./MenuPc";

const Menu = () => {
  const { chromeWidth } = React.useContext(reState);
  //
  const [widthWindow, setWidthWindow] = useState();
  //
  useEffect(() => {
    setWidthWindow(chromeWidth);
  }, [chromeWidth]);
  return <>{widthWindow > 1050 ? <MenuPc /> : <MenuMobile />}</>;
};

export default Menu;
