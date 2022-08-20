import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Row, Col, Card, List, message } from "antd";
import VirtualList from "rc-virtual-list";
import styles from "../../../styles/Home.module.css";
import { ConvertPath } from "../../../helpers/functions";

const { Meta } = Card;

const listData = [
  {
    image: "https://vncdn.sabasports.com/2022/08/Fofana-kho-chiu.jpg",
    title: "Đến lượt Jurgen Klopp đặt dấu hỏi về chuyện mua sắm của Barca 1",
  },
  {
    image: "https://vncdn.sabasports.com/2022/08/Fofana-kho-chiu.jpg",
    title: "Đến lượt Jurgen Klopp đặt dấu hỏi về chuyện mua sắm của Barca 1",
  },
  {
    image: "https://vncdn.sabasports.com/2022/08/Fofana-kho-chiu.jpg",
    title: "Đến lượt Jurgen Klopp đặt dấu hỏi về chuyện mua sắm của Barca 1",
  },
  {
    image: "https://vncdn.sabasports.com/2022/08/Fofana-kho-chiu.jpg",
    title: "Đến lượt Jurgen Klopp đặt dấu hỏi về chuyện mua sắm của Barca 1",
  },
  {
    image: "https://vncdn.sabasports.com/2022/08/Fofana-kho-chiu.jpg",
    title: "Đến lượt Jurgen Klopp đặt dấu hỏi về chuyện mua sắm của Barca 1",
  },
  {
    image: "https://vncdn.sabasports.com/2022/08/Fofana-kho-chiu.jpg",
    title: "Đến lượt Jurgen Klopp đặt dấu hỏi về chuyện mua sắm của Barca 1",
  },
  {
    image: "https://vncdn.sabasports.com/2022/08/Fofana-kho-chiu.jpg",
    title: "Đến lượt Jurgen Klopp đặt dấu hỏi về chuyện mua sắm của Barca 1",
  },
  {
    image: "https://vncdn.sabasports.com/2022/08/Fofana-kho-chiu.jpg",
    title: "Đến lượt Jurgen Klopp đặt dấu hỏi về chuyện mua sắm của Barca 1",
  },
];

const fakeDataUrl =
  "https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo";
const ContainerHeight = 400;

const ListVideo = () => {
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
    <>
      <h2 className="title-heading">
        <Link href={"/video"}>Video</Link>
      </h2>
      <Row gutter={20}>
        <Col md={14} sm={24} xs={24}>
          {/* <Card
            hoverable
            cover={
              <img
                alt="example"
                src="https://vncdn.sabasports.com/2022/08/Fofana-kho-chiu.jpg"
              />
            }
          >
            <Meta
              title="Fofana khó chịu vì không được ra đi"
              description="Hậu vệ của Leicester hiện đang cảm thấy bức rức bởi đội nhà không muốn bán anh cho Chelsea."
            />
          </Card> */}
          <iframe
            width="667"
            height="400"
            src="https://www.youtube.com/embed/fvrkGsQ_1gg"
            title="Highlights Juventus - Sassuolo | Di Maria chào sân bằng siêu phẩm vô lê, Vlahovic quá chói sáng"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>
        <Col md={10} xs={24} sm={24}>
          <List>
            <VirtualList
              data={data}
              height={400}
              itemHeight={47}
              itemKey="tirle"
              onScroll={onScroll}
            >
              {(item) => (
                <List.Item key={item.title}>
                  <Row>
                    <Col md={8}>
                      <List.Item.Meta
                        avatar={<img src={item.image} />}
                        // title={
                        //   <Link href="/">
                        //     <span className={styles["title"]}>{item.title}</span>
                        //   </Link>
                        // }
                        // description={item.title}
                      />
                    </Col>
                    <Col md={16}>
                      <div>{item.title}</div>
                    </Col>
                  </Row>
                </List.Item>
              )}
            </VirtualList>
          </List>
        </Col>
      </Row>
    </>
  );
};

export default ListVideo;
