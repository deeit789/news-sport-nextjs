import React, { useState, useEffect } from "react";
import Link from "next/link";
import VirtualList from "rc-virtual-list";
import styles from "../../styles/tin-the-thao.module.css";
import { Row, Col, message, List, Divider } from "antd";
import WatchMoreInfo from "../../app/project/WatchMoreInfo";
import { ConvertPath } from "../../helpers/functions";

const ContainerHeight = 400;

const listData = [
  {
    image: "https://vncdn.sabasports.com/2022/08/Fofana-kho-chiu.jpg",
    title: "Đến lượt Jurgen Klopp đặt dấu hỏi về chuyện mua sắm của Barca 1",
    timer: "20 phút trước",
    description:
      "Hậu vệ của Leicester hiện đang cảm thấy bức rức bởi đội nhà không muốn bán anh cho Chelsea",
  },
  {
    image: "https://vncdn.sabasports.com/2022/08/Fofana-kho-chiu.jpg",
    title: "Đến lượt Jurgen Klopp đặt dấu hỏi về chuyện mua sắm của Barca 1",
    timer: "20 phút trước",
    description:
      "Hậu vệ của Leicester hiện đang cảm thấy bức rức bởi đội nhà không muốn bán anh cho Chelsea",
  },
  {
    image: "https://vncdn.sabasports.com/2022/08/Fofana-kho-chiu.jpg",
    title: "Đến lượt Jurgen Klopp đặt dấu hỏi về chuyện mua sắm của Barca 1",
    timer: "20 phút trước",
    description:
      "Hậu vệ của Leicester hiện đang cảm thấy bức rức bởi đội nhà không muốn bán anh cho Chelsea",
  },
  {
    image: "https://vncdn.sabasports.com/2022/08/Fofana-kho-chiu.jpg",
    title: "Đến lượt Jurgen Klopp đặt dấu hỏi về chuyện mua sắm của Barca 1",
    timer: "20 phút trước",
    description:
      "Hậu vệ của Leicester hiện đang cảm thấy bức rức bởi đội nhà không muốn bán anh cho Chelsea",
  },
  {
    image: "https://vncdn.sabasports.com/2022/08/Fofana-kho-chiu.jpg",
    title: "Đến lượt Jurgen Klopp đặt dấu hỏi về chuyện mua sắm của Barca 1",
    timer: "20 phút trước",
    description:
      "Hậu vệ của Leicester hiện đang cảm thấy bức rức bởi đội nhà không muốn bán anh cho Chelsea",
  },
  {
    image: "https://vncdn.sabasports.com/2022/08/Fofana-kho-chiu.jpg",
    title: "Đến lượt Jurgen Klopp đặt dấu hỏi về chuyện mua sắm của Barca 1",
    timer: "20 phút trước",
    description:
      "Hậu vệ của Leicester hiện đang cảm thấy bức rức bởi đội nhà không muốn bán anh cho Chelsea",
  },
  {
    image: "https://vncdn.sabasports.com/2022/08/Fofana-kho-chiu.jpg",
    title: "Đến lượt Jurgen Klopp đặt dấu hỏi về chuyện mua sắm của Barca 1",
    timer: "20 phút trước",
    description:
      "Hậu vệ của Leicester hiện đang cảm thấy bức rức bởi đội nhà không muốn bán anh cho Chelsea",
  },
  {
    image: "https://vncdn.sabasports.com/2022/08/Fofana-kho-chiu.jpg",
    title: "Đến lượt Jurgen Klopp đặt dấu hỏi về chuyện mua sắm của Barca 1",
    timer: "20 phút trước",
    description:
      "Hậu vệ của Leicester hiện đang cảm thấy bức rức bởi đội nhà không muốn bán anh cho Chelsea",
  },
];

const SportInfo = () => {
  const [data, setData] = useState(listData ?? []);

  const appendData = () => {
    setData(data);
  };

  useEffect(() => {
    appendData();
  }, []);

  const onScroll = (e) => {
    if (
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
      ContainerHeight
    ) {
      appendData();
    }
  };

  return (
    <div className="body">
      <h2 className="title-heading">
        <Link href={"/tin-the-thao"}>Tin thể thao</Link>
      </h2>
      <Divider />
      <Row gutter={20}>
        <Col md={16}>
          <Row style={{ background: "#e8eaef" }} gutter={10}>
            <Col md={16}>
              <Link
                href={`/${ConvertPath(
                  "Ảnh chế Liverpool 1-1 Crystal Palace: Nunez học thiết đầu công từ Zidane"
                )}`}
              >
                <img src="https://vncdn.sabasports.com/2022/08/Anh-che-Liverpool-Crystal-Palace-7.jpg" />
              </Link>
            </Col>
            <Col md={8}>
              <p className={styles["title"]}>
                Ảnh chế Liverpool 1-1 Crystal Palace: Nunez học ‘thiết đầu công’
                từ Zidane
              </p>
              <p style={{ color: "#4f4f4f" }}>
                Tân binh bên phía The Kop đã thiếu kiềm chế trước hành động
                khiêu khích từ đối phương, dẫn đến cái kết là một chiếc thẻ đỏ.
              </p>
            </Col>
          </Row>
          <Row style={{ marginTop: 30 }}>
            <List>
              <VirtualList
                data={data}
                height={400}
                itemHeight={47}
                itemKey="tirle"
                onScroll={onScroll}
              >
                {(item) => (
                  <List.Item key={item.title} className={styles["new-item"]}>
                    <Row>
                      <Col md={8}>
                        <List.Item.Meta
                          avatar={
                            <Link href={ConvertPath(item.title)}>
                              <img src={item.image} />
                            </Link>
                          }
                        />
                      </Col>
                      <Col md={16}>
                        <Link href={ConvertPath(item.title)}>
                          <p className={styles["title"]}>{item.title}</p>
                        </Link>
                        <p className={styles["description"]}>
                          {item.description}
                        </p>
                        <p className={styles["text-timer"]}>{item.timer}</p>
                      </Col>
                    </Row>
                  </List.Item>
                )}
              </VirtualList>
            </List>
          </Row>
        </Col>
        <WatchMoreInfo />
      </Row>
    </div>
  );
};

export default SportInfo;
