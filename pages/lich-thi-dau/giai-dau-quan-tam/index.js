import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Right from "../../../app/project/lich-thi-dau/chi-tiet/Right";
const InterestedLeague = () => {
  const router = useRouter();

  const menu = [
    {
      to: "/lich-thi-dau/tran-dau-quan-tam",
      title: "Tất cả",
    },
    {
      to: "/lich-thi-dau/tran-dau-quan-tam?tab=truc-tiep",
      title: "Trực tiếp",
    },
    {
      to: "/lich-thi-dau/tran-dau-quan-tam?tab=chua-dien-ra",
      title: "Chưa diễn ra",
    },
    {
      to: "/lich-thi-dau/tran-dau-quan-tam?tab=da-dien-ra",
      title: "Đã diễn ra",
    },
  ];
  return (
    <div className="body">
      <Head>
        <title>Saba Sport - Lịch thi đấu</title>
        <meta
          name="description"
          content="Web tin tức bóng đá, cập nhật liên tục 24h, nhanh nhất Việt nam"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="schedule-style">
        <div className="schedule-style-left">
          <div className="detail-schedule-style-left-week">
            <div className="menu-nav">
              <span>LTĐ</span> {">"}{" "}
              <span className="link">Giải đấu quan tâm</span>
              <div
                style={{
                  color: "#324a75",
                  fontWeight: "900",
                  fontSize: "16px",
                  marginTop: "15px",
                }}
                className="menu-item"
              >
                GIẢI ĐẤU QUAN TÂM
              </div>
            </div>
            <div className="menu-to-me">
              {menu.map((val, idx) => {
                return (
                  <Link key={idx} href={val.to}>
                    <div
                      className={
                        " menu-to-me-item " +
                        (router.asPath === val.to
                          ? "menu-to-me-item-checked"
                          : "")
                      }
                    >
                      {val.title}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div style={{ marginTop: "10px" }}>Không có trận đấu nào.</div>
        </div>
        <div className="schedule-style-right">
          <Right />
        </div>
      </div>
    </div>
  );
};

export default InterestedLeague;
