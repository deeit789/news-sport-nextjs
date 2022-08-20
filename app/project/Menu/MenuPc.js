import { scrollView, SizeOfElement } from "@function";
import { ImgBannerMenu, ImgIconVietNam, ImgLogo, ImgMan } from "@image";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
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

const IconArrow = () => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="none" d="M0 0h24v24H0V0z"></path>
      <path d="M6.23 20.23L8 22l10-10L8 2 6.23 3.77 14.46 12z"></path>
    </svg>
  );
};
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
          <div className={Styles.menu_bottom_item}>
            Lịch thi đấu
            <div className={Styles.menu_sub}>
              <Link href="/lich-thi-dau/tran-dau-quan-tam">
                <a>
                  <div className={Styles.menu_sub_item}>Trận đấu quan tâm</div>
                </a>
              </Link>
              <Link href="/lich-thi-dau/giai-dau-quan-tam">
                <a>
                  <div className={Styles.menu_sub_item}>Giải đấu quan tâm</div>
                </a>
              </Link>
            </div>
          </div>
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
          <div className={Styles.menu_bottom_item}>
            Bóng đá{" "}
            <div className={Styles.menu_sub}>
              <Link href="/bong-da/viet-nam">
                <a>
                  <div
                    style={{ padding: "0px 0px", width: "100%" }}
                    className={Styles.menu_sub_item}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        height: "100%",
                        width: "100%",
                        justifyContent: "space-between",
                        padding: "0px 15px",
                      }}
                      className={Styles.menu_sub_item_menu}
                    >
                      Việt Nam
                      <IconArrow />
                      <div className={Styles.menu_sub_item_menu2_sub}>
                        <Link href="/bong-da/viet-nam/v-league">
                          <a>
                            <div
                              className={Styles.menu_sub_item_menu2_sub_item}
                            >
                              V-League
                            </div>
                          </a>
                        </Link>
                        <Link href="/bong-da/viet-nam/dt-viet-nam">
                          <a>
                            <div
                              className={Styles.menu_sub_item_menu2_sub_item}
                            >
                              Đội tuyển Việt Nam
                            </div>
                          </a>
                        </Link>
                        <Link href="/bong-da/viet-nam/dt-nu-viet-nam">
                          <a>
                            <div
                              className={Styles.menu_sub_item_menu2_sub_item}
                            >
                              Đội tuyển nữ Việt Nam
                            </div>
                          </a>
                        </Link>
                        <Link href="/bong-da/viet-nam/u23-viet-nam">
                          <a>
                            <div
                              className={Styles.menu_sub_item_menu2_sub_item}
                            >
                              U23 Việt Namm
                            </div>
                          </a>
                        </Link>
                        <Link href="/bong-da/viet-nam/futsal-viet-nam">
                          <a>
                            <div
                              className={Styles.menu_sub_item_menu2_sub_item}
                            >
                              Futsal Việt Nam
                            </div>
                          </a>
                        </Link>
                        <Link href="/bong-da/viet-nam/viet-nam-khac">
                          <a>
                            <div
                              className={Styles.menu_sub_item_menu2_sub_item}
                            >
                              Khác
                            </div>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
              {/*  */}
              <Link href="/bong-da/cup-chau-au">
                <a>
                  <div
                    style={{ padding: "0px 0px", width: "100%" }}
                    className={Styles.menu_sub_item}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        height: "100%",
                        width: "100%",
                        justifyContent: "space-between",
                        padding: "0px 15px",
                      }}
                      className={Styles.menu_sub_item_menu}
                    >
                      Cúp Châu Âu
                      <IconArrow />
                      <div className={Styles.menu_sub_item_menu2_sub}>
                        <Link href="/bong-da/cup-chau-au/champions-league">
                          <a>
                            <div
                              className={Styles.menu_sub_item_menu2_sub_item}
                            >
                              Champions League
                            </div>
                          </a>
                        </Link>
                        <Link href="/bong-da/cup-chau-au/europa-league">
                          <a>
                            <div
                              className={Styles.menu_sub_item_menu2_sub_item}
                            >
                              Europa League
                            </div>
                          </a>
                        </Link>
                        <Link href="/bong-da/cup-chau-au/cup-chau-au-khac">
                          <a>
                            <div
                              className={Styles.menu_sub_item_menu2_sub_item}
                            >
                              Khác
                            </div>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
              {/*  */}
              <Link href="/bong-da/anh">
                <a>
                  <div
                    style={{ padding: "0px 0px", width: "100%" }}
                    className={Styles.menu_sub_item}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        height: "100%",
                        width: "100%",
                        justifyContent: "space-between",
                        padding: "0px 15px",
                      }}
                      className={Styles.menu_sub_item_menu}
                    >
                      Anh
                      <IconArrow />
                      <div className={Styles.menu_sub_item_menu2_sub}>
                        <Link href="/bong-da/anh/ngoai-hang-anh">
                          <a>
                            <div
                              className={Styles.menu_sub_item_menu2_sub_item}
                            >
                              Ngoại hạng Anh
                            </div>
                          </a>
                        </Link>
                        <Link href="/bong-da/anh/fa-cup">
                          <a>
                            <div
                              className={Styles.menu_sub_item_menu2_sub_item}
                            >
                              FA Cup
                            </div>
                          </a>
                        </Link>
                        <Link href="/bong-da/anh/anh-khac">
                          <a>
                            <div
                              className={Styles.menu_sub_item_menu2_sub_item}
                            >
                              Khác
                            </div>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
              {/*  */}
              <Link href="/bong-da/tay-ban-nha">
                <a>
                  <div
                    style={{ padding: "0px 0px", width: "100%" }}
                    className={Styles.menu_sub_item}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        height: "100%",
                        width: "100%",
                        justifyContent: "space-between",
                        padding: "0px 15px",
                      }}
                      className={Styles.menu_sub_item_menu}
                    >
                      Tây Ban Nha
                      <IconArrow />
                      <div className={Styles.menu_sub_item_menu2_sub}>
                        <Link href="/bong-da/tay-ban-nha/la-liga">
                          <a>
                            <div
                              className={Styles.menu_sub_item_menu2_sub_item}
                            >
                              La Liga
                            </div>
                          </a>
                        </Link>
                        <Link href="/bong-da/tay-ban-nha/tay-ban-nha-khac">
                          <a>
                            <div
                              className={Styles.menu_sub_item_menu2_sub_item}
                            >
                              Khác
                            </div>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
              {/*  */}
              <Link href="/bong-da/italia">
                <a>
                  <div
                    style={{ padding: "0px 0px", width: "100%" }}
                    className={Styles.menu_sub_item}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        height: "100%",
                        width: "100%",
                        justifyContent: "space-between",
                        padding: "0px 15px",
                      }}
                      className={Styles.menu_sub_item_menu}
                    >
                      Italia
                      <IconArrow />
                      <div className={Styles.menu_sub_item_menu2_sub}>
                        <Link href="/bong-da/italia/serie-a">
                          <a>
                            <div
                              className={Styles.menu_sub_item_menu2_sub_item}
                            >
                              Serie A
                            </div>
                          </a>
                        </Link>
                        <Link href="/bong-da/italia/italia-khac">
                          <a>
                            <div
                              className={Styles.menu_sub_item_menu2_sub_item}
                            >
                              Khác
                            </div>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
              {/*  */}
              <Link href="/bong-da/duc">
                <a>
                  <div
                    style={{ padding: "0px 0px", width: "100%" }}
                    className={Styles.menu_sub_item}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        height: "100%",
                        width: "100%",
                        justifyContent: "space-between",
                        padding: "0px 15px",
                      }}
                      className={Styles.menu_sub_item_menu}
                    >
                      Đức
                      <IconArrow />
                      <div className={Styles.menu_sub_item_menu2_sub}>
                        <Link href="/bong-da/duc/bundesliga">
                          <a>
                            <div
                              className={Styles.menu_sub_item_menu2_sub_item}
                            >
                              Bundesliga
                            </div>
                          </a>
                        </Link>
                        <Link href="/bong-da/duc/duc-khac">
                          <a>
                            <div
                              className={Styles.menu_sub_item_menu2_sub_item}
                            >
                              Khác
                            </div>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
              {/*  */}
              <Link href="/bong-da/phap">
                <a>
                  <div
                    style={{ padding: "0px 0px", width: "100%" }}
                    className={Styles.menu_sub_item}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        height: "100%",
                        width: "100%",
                        justifyContent: "space-between",
                        padding: "0px 15px",
                      }}
                      className={Styles.menu_sub_item_menu}
                    >
                      Pháp
                      <IconArrow />
                      <div className={Styles.menu_sub_item_menu2_sub}>
                        <Link href="/bong-da/phap/ligue-1">
                          <a>
                            <div
                              className={Styles.menu_sub_item_menu2_sub_item}
                            >
                              Ligue 1
                            </div>
                          </a>
                        </Link>
                        <Link href="/bong-da/phap/phap-khac">
                          <a>
                            <div
                              className={Styles.menu_sub_item_menu2_sub_item}
                            >
                              Khác
                            </div>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
              {/*  */}
              <Link href="/bong-da/quoc-te">
                <a>
                  <div
                    style={{ padding: "0px 0px", width: "100%" }}
                    className={Styles.menu_sub_item}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        height: "100%",
                        width: "100%",
                        justifyContent: "space-between",
                        padding: "0px 15px",
                      }}
                      className={Styles.menu_sub_item_menu}
                    >
                      Quốc tế
                      <IconArrow />
                      <div className={Styles.menu_sub_item_menu2_sub}>
                        <Link href="/bong-da/quoc-te/world-cup">
                          <a>
                            <div
                              className={Styles.menu_sub_item_menu2_sub_item}
                            >
                              World Cup
                            </div>
                          </a>
                        </Link>
                        <Link href="/bong-da/quoc-te/euro">
                          <a>
                            <div
                              className={Styles.menu_sub_item_menu2_sub_item}
                            >
                              Euro
                            </div>
                          </a>
                        </Link>
                        <Link href="/bong-da/quoc-te/asian-cup">
                          <a>
                            <div
                              className={Styles.menu_sub_item_menu2_sub_item}
                            >
                              Asian Cup
                            </div>
                          </a>
                        </Link>
                        <Link href="/bong-da/quoc-te/copa-america">
                          <a>
                            <div
                              className={Styles.menu_sub_item_menu2_sub_item}
                            >
                              Copa America
                            </div>
                          </a>
                        </Link>
                        <Link href="/bong-da/quoc-te/aff-cup">
                          <a>
                            <div
                              className={Styles.menu_sub_item_menu2_sub_item}
                            >
                              AFF Cup
                            </div>
                          </a>
                        </Link>
                        <Link href="/bong-da/quoc-te/sea-games">
                          <a>
                            <div
                              className={Styles.menu_sub_item_menu2_sub_item}
                            >
                              Sea games
                            </div>
                          </a>
                        </Link>
                        <Link href="/bong-da/quoc-te/u23-chau-a">
                          <a>
                            <div
                              className={Styles.menu_sub_item_menu2_sub_item}
                            >
                              U23 Châu Á
                            </div>
                          </a>
                        </Link>
                        <Link href="/bong-da/quoc-te/quoc-te-khac">
                          <a>
                            <div
                              className={Styles.menu_sub_item_menu2_sub_item}
                            >
                              Khác
                            </div>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
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
          <div className={Styles.menu_bottom_item}>
            Nhận định bóng đá <Image src={ImgMan} />
            <div className={Styles.menu_sub}>
              <Link href="/nhan-dinh-bong-da/cup-c1">
                <a>
                  <div className={Styles.menu_sub_item}>Cúp C1</div>
                </a>
              </Link>
              <Link href="/nhan-dinh-bong-da/ngoai-hang-anh">
                <a>
                  <div className={Styles.menu_sub_item}>Ngoại hạng Anh</div>
                </a>
              </Link>
              <Link href="/nhan-dinh-bong-da/laliga">
                <a>
                  <div className={Styles.menu_sub_item}>La Liga</div>
                </a>
              </Link>
              <Link href="/nhan-dinh-bong-da/serie-a">
                <a>
                  <div className={Styles.menu_sub_item}>Serie A</div>
                </a>
              </Link>
              <Link href="/nhan-dinh-bong-da/bundesliga">
                <a>
                  <div className={Styles.menu_sub_item}>Bundesliga</div>
                </a>
              </Link>
              <Link href="/nhan-dinh-bong-da/ligue-1">
                <a>
                  <div className={Styles.menu_sub_item}>Ligue 1</div>
                </a>
              </Link>
              <Link href="/nhan-dinh-bong-da/v-league">
                <a>
                  <div className={Styles.menu_sub_item}>V-League</div>
                </a>
              </Link>
              <Link href="/nhan-dinh-bong-da/cup-c2">
                <a>
                  <div className={Styles.menu_sub_item}>Cúp C2</div>
                </a>
              </Link>
              <Link href="/nhan-dinh-bong-da/nations-league">
                <a>
                  <div className={Styles.menu_sub_item}>Nations League</div>
                </a>
              </Link>
              <Link href="/nhan-dinh-bong-da/khac">
                <a>
                  <div className={Styles.menu_sub_item}>Khác</div>
                </a>
              </Link>
            </div>
          </div>
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

const MenuPc = () => {
  /**
   * State
   */
  const [menuScroll, setMenuScroll] = useState(false);
  const route = useRouter();
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
    </>
  );
};

export default MenuPc;
