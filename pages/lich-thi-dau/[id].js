import Head from "next/head";
import React from "react";
import DetailSchedule from '../../app/project/lich-thi-dau/chi-tiet/DetailSchedule'


const Schedule = (props) => {
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
    <DetailSchedule />
    </div>
  )

};


export const getStaticProps = async ({ params }) => {
  return {
    props: {
      params
      },
  };
};
export const getStaticPaths = () => {
  return {
  paths: [],
  fallback: true,
  };
}

export default Schedule;
