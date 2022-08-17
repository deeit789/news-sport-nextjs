import { SizeOfElement } from "@function";
import { ImgBannerMenu, ImgIconVietNam, ImgLogo, ImgMan } from "@image";
import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";
import Styles from "./style/Menupc.module.css";

const HeaderMenu = () => {
  return (
    <>
      <div className={Styles.header_menu_top}>
        <Image src={ImgIconVietNam} />
        <div>Tiếng Việt</div>
        <div>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            style={{ fontSize: "24px" }}
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M7 10l5 5 5-5z"></path>
          </svg>
        </div>
      </div>
      <div className={Styles.header_menu_top_header}></div>
      <div className={Styles.header_menu_input}>
        <input placeholder="Tìm kiếm" />
      </div>
      <div className={Styles.header_menu_login}>Đăng nhập</div>
    </>
  );
};
const menuBottom = [
  {
    element: (
      <div className={Styles.menu_bottom_item}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 1024 1024"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          style={{ fontSize: "18px" }}
        >
          <path d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z"></path>
        </svg>
      </div>
    ),
    event: () => {},
    status: true,
  },
  {
    element: <div className={Styles.menu_bottom_item}>Lịch thi đấu</div>,
    event: () => {},
    status: true,
  },
  {
    element: <div className={Styles.menu_bottom_item}>Bóng đá</div>,
    event: () => {},
    status: true,
  },
  {
    element: (
      <div className={Styles.menu_bottom_item}>
        Nhận định bóng đá <Image src={ImgMan} />
      </div>
    ),
    event: () => {},
    status: true,
  },
  {
    element: <div className={Styles.menu_bottom_item}>Hậu trường</div>,
    event: () => {},
    status: true,
  },
  {
    element: <div className={Styles.menu_bottom_item}>Chuyển nhượng</div>,
    event: () => {},
    status: true,
  },
  {
    element: <div className={Styles.menu_bottom_item}>Các môn khác</div>,
    event: () => {},
    status: true,
  },
  {
    element: <div className={Styles.menu_bottom_item}>Video</div>,
    event: () => {},
    status: true,
  },
];

const MenuPc = () => {
  const [menuScroll, setMenuScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let { elementBottom } = SizeOfElement(document.body);
      if (elementBottom > 110) {
        setMenuScroll(true);
      } else {
        setMenuScroll(false);
      }
    });
  }, [typeof window !== "undefined" && window]);
  return (
    <div
      className={Styles.menu + " " + (menuScroll ? Styles.menu_display : "")}
    >
      <div
        className={
          Styles.menu_top + " " + (menuScroll ? Styles.menu_top_display : "")
        }
      >
        <div className={"container " + Styles.menu_top_container}>
          <div className="centerB width-50">
            <div className={Styles.menu_top_image}>
              <Image className={Styles.img} src={ImgLogo} />
            </div>
            <div className={Styles.menu_top_banner}>
              <Image className={Styles.img} src={ImgBannerMenu} />
            </div>
          </div>
          <div
            className={
              "container " +
              Styles.menu_top_container +
              " " +
              Styles.menu_top_left
            }
          >
            <HeaderMenu />
          </div>
        </div>
      </div>
      <div className={"container " + Styles.menu_bottom}>
        {menuBottom.map((val, key) => {
          return <Fragment key={key}>{val.element}</Fragment>;
        })}
      </div>
    </div>
  );
};

export default MenuPc;
