import Head from "next/head";
import { Row, Col } from "antd";
import Newfeed from "../app/project/Home/NewFeed";
import ListVideo from "../app/project/Home/ListVideo";
import NewFootball from "../app/project/Home/NewFootball";
import ListBackstage from "../app/project/Home/ListBackstage";
import TransferInfo from "../app/project/Home/TransferInfo";
import OtherSubjects from "../app/project/Home/OtherSubjects";
import Predictive from "../app/project/Home/Predictive";

export default function Home() {
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
        <Newfeed />
        <ListVideo />
        <NewFootball />
      </div>

      <Predictive />
      <div className="container-content">
        <Row gutter={10} align="top" justify="start">
          <Col md={14}>
            <ListBackstage />
          </Col>
          <Col md={8}>
            <TransferInfo />
          </Col>
        </Row>
        <OtherSubjects />
      </div>
    </>
  );
}
