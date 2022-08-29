import React from "react";
import Head from "next/head";
import ComponentSchedule from "../../app/project/lich-thi-dau/Schedule";
const Schedule = () => {
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
      <ComponentSchedule />
    </div>
  );
};

export default Schedule;
