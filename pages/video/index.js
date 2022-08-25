import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../../styles/tin-the-thao.module.css";
import { Row, Col, message, List, Divider } from "antd";
import WatchMoreInfo from "../../app/project/WatchMoreInfo";
import Head from "next/head";
import { getListVideo, getListWatchMore } from "../../stores/video";

const Video = ({ listVideos, listWatchMore }) => {
  const [data, setData] = useState(listVideos ?? []);

  useEffect(() => {
    const appendData = () => {
      setData(data);
    };
    return appendData();
  }, [data]);

  const onScroll = (e) => {
    if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === 400) {
      setData(data)
    }
  };
  return (
    <div className="body">
      <Head>
        <title>Video nổi bật</title>
        <meta
          name="description"
          content="Web tin tức bóng đá, cập nhật liên tục 24h, nhanh nhất Việt nam"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2 className="title-heading">Video</h2>
      <Divider />
      <Row gutter={20}>
        <Col md={16}>
          <Row style={{ padding: "0px 0px 40px 0px" }}>
            <iframe
              src="https://www.youtube.com/embed/fvrkGsQ_1gg"
              title="Highlights Juventus - Sassuolo | Di Maria chào sân bằng siêu phẩm vô lê, Vlahovic quá chói sáng"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Row>
          <Row gutter={10} style={{ marginTop: "30px" }}>
            {data.map((item, index) => (
              <Col md={8} key={index}>
                <Link href={"/"}>
                  <div className={styles["new-card"]}>
                    <img alt="image web sports" src={item.image} />
                    <p className={styles["title"]}>{item.title}</p>
                    <p className={styles["text-timer"]}>{item.timer}</p>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </Col>
        <WatchMoreInfo listWatchMore={listWatchMore} />
      </Row>
    </div>
  );
};

export const getStaticProps = async () => {
  const listVideos = await getListVideo();
  const listWatchMore = await getListWatchMore();

  return {
    props: {
      listVideos,
      listWatchMore,
    },
  };
};

export default Video;
