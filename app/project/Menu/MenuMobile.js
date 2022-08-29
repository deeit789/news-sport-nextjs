
import { scrollView, SizeOfElement } from "@function";
import { ImgIconVietNam, ImgLogo } from "@image";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useRef, useState } from "react";
import DrawerMenu from "./Drawer";
import Styles from "./style/MenuMoble.module.css";

const menuBottom = [
  {
    element: (
      <Link href={"/"}>
        <a>
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
        </a>
      </Link>
    ),
    event: () => {},
    status: true,
    path: "",
  },
  {
    element: (
      <Link href={"/lich-thi-dau"}>
        <a>
          <div className={Styles.menu_bottom_item}>Lịch thi đấu</div>
        </a>
      </Link>
    ),
    event: () => {},
    status: true,
    path: "lich-thi-dau",
  },
  {
    element: (
      <Link href={"/bong-da"}>
        <a>
          {" "}
          <div className={Styles.menu_bottom_item}>Bóng đá </div>
        </a>
      </Link>
    ),
    event: () => {},
    status: true,
    path: "bong-da",
  },
  {
    element: (
      <Link href={"/nhan-dinh-bong-da"}>
        <a>
          <div className={Styles.menu_bottom_item}>Nhận định bóng đá</div>
        </a>
      </Link>
    ),
    event: () => {},
    status: true,
    path: "nhan-dinh-bong-da",
  },
  {
    element: (
      <Link href={"/hau-truong"}>
        <a>
          <div className={Styles.menu_bottom_item}>Hậu trường</div>
        </a>
      </Link>
    ),
    event: () => {},
    status: true,
    path: "hau-truong",
  },
  {
    element: (
      <Link href={"/chuyen-nhuong"}>
        <a>
          <div className={Styles.menu_bottom_item}>Chuyển nhượng</div>
        </a>
      </Link>
    ),
    event: () => {},
    status: true,
    path: "chuyen-nhuong",
  },
  {
    element: (
      <Link href={"/cac-mon-khac"}>
        <a>
          <div className={Styles.menu_bottom_item}>Các môn khác</div>
        </a>
      </Link>
    ),
    event: () => {},
    status: true,
    path: "cac-mon-khac",
  },
  {
    element: (
      <Link href={"/video"}>
        <a>
          <div className={Styles.menu_bottom_item}>Video</div>
        </a>
      </Link>
    ),
    event: () => {},
    status: true,
    path: "video",
  },
];

const MenuMobile = () => {
  const [menuScroll, setMenuScroll] = useState(false);
  const [isVisible,setIsVisible] = useState(false)

  const route = useRouter();
  const ref = useRef()
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
    <>
    <div
      className={
        Styles.menu_mobile + " " + (menuScroll ? Styles.menu_display : "")
      }
    >
      <div
        className={
          Styles.menu_mobile_top +
          " " +
          (menuScroll ? Styles.menu_top_display : "")
        }
      >
        <div className={Styles.menu_mobile_top_left}  >
          <svg
          onClick={()=>setIsVisible(!isVisible)}
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <desc></desc>
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <line x1="4" y1="6" x2="20" y2="6"></line>
            <line x1="4" y1="12" x2="20" y2="12"></line>
            <line x1="4" y1="18" x2="20" y2="18"></line>
          </svg>
          <Image src={ImgIconVietNam} />
        </div>
        <div className={Styles.menu_mobile_top_right}>Đăng nhập</div>
        <Image className={Styles.img} src={ImgLogo} />
      </div>
      <div className={Styles.menu_mobile_bottom}>
        <div ref={ref} className={Styles.menu_mobile_bottom_container}>
          <div className={Styles.menu_mobile_bottom_menu}>
            {menuBottom.map((val, idx) => {
              return <Fragment key={idx}>{val.element}</Fragment>;
            })}
          </div>
        </div>
        <div className={Styles.menu_mobile_bottom_next}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            onClick={()=>{
              scrollView.elementRight(ref.current, 1000)
            }}
          >
            <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
          </svg>
        </div>
      </div>
    </div>
    {menuScroll && (
      <div
        onClick={() => {
          scrollView.top();
        }}
        className={Styles.arowTop}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"></path>
        </svg>
      </div>
    )}

    {
      isVisible ? <DrawerMenu styles={Styles} visible={isVisible} onClose={()=>setIsVisible(false)} /> : ""
    }
    </>
  );
          }
export default MenuMobile;
