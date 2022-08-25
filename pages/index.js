import Head from "next/head";
import { Row, Col } from "antd";
import Newfeed from "../app/project/Home/NewFeed";
import ListVideo from "../app/project/Home/ListVideo";
import NewFootball from "../app/project/Home/NewFootball";
import ListBackstage from "../app/project/Home/ListBackstage";
import TransferInfo from "../app/project/Home/TransferInfo";
import OtherSubjects from "../app/project/Home/OtherSubjects";
import Predictive from "../app/project/Home/Predictive";
import { getListVideo } from "../stores/video";
import { getListFootball } from "../stores/bongda";
import { getListTransfer } from "../stores/chuyennhuong";
import { getListNewsNew } from "../stores/tinmoinhat";
import { getListBackstage } from "../stores/hautruong";
import { getListOtherSports } from "../stores/cacmonkhac";
import { getListPredic } from "../stores/nhandinhbongda";

function Home({
  listSportInfo,
  listFootball,
  listVideos,
  listTransfer,
  listBackstage,
  listDataPredic,
  listOtherSubject,
}) {
  return (
    <>
      <div className="body">
        <Head>
          <title>Saba Sport - Tin bóng đá, nhận định bóng đá</title>
          <meta
            name="description"
            content="Web tin tức bóng đá, cập nhật liên tục 24h, nhanh nhất Việt nam"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Newfeed listSportInfo={listSportInfo} />
        <ListVideo listVideos={listVideos} />
        <NewFootball listFootball={listFootball} />
      </div>

      <Predictive listDataPredic={listDataPredic} />
      <div className="container-content">
        <Row gutter={10} align="top" justify="start">
          <Col md={14}>
            <ListBackstage listBackstage={listBackstage} />
          </Col>
          <Col md={8}>
            <TransferInfo listTransfer={listTransfer} />
          </Col>
        </Row>
        <OtherSubjects listOtherSubject={listOtherSubject} />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const listSportInfo = await getListNewsNew();
  const listVideos = await getListVideo();
  const listBackstage = await getListBackstage();
  const listFootball = await getListFootball();
  const listTransfer = await getListTransfer();
  const listOtherSubject = await getListOtherSports();
  const listDataPredic = await getListPredic();

  return {
    props: {
      listSportInfo,
      listVideos,
      listTransfer,
      listBackstage,
      listFootball,
      listOtherSubject,
      listDataPredic,
    },
  };
};

export default Home;
