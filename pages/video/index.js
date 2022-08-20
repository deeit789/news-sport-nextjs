import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../../styles/tin-the-thao.module.css";
import { Row, Col, message, List, Divider } from "antd";
import WatchMoreInfo from "../../app/project/WatchMoreInfo";
import {data as listData} from "../../app/@function/constant"


const Video = () => {
  const [data, setData] = useState(listData ?? []);

  

  useEffect(() => {
    const appendData = () => {
      setData(data);
    };
    return appendData();
  }, [data]);

  const onScroll = (e) => {
    if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === 400) {
      appendData();
    }
  };
  return (
    <div className="body">
      <h2 className="title-heading">Video</h2>
      <Divider />
      <Row gutter={20}>
        <Col md={16}>
          <Row style={{padding:"0px 0px 40px 0px"}}>
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
        <WatchMoreInfo />
      </Row>
    </div>
  );
};

export default Video;
