import React from "react";
import { Row, Col, Divider } from "antd";
import Link from "next/link";
import styles from "./tin-xem-nhieu.module.css";
import { ConvertPath } from "../../../helpers/functions";

const data = [
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

const WatchMoreInfo = () => {
  return (
    <Col md={8}>
      <h2 className="title-content">Xem nhiều nhất</h2>
      {data.map((item, index) => (
        <>
          {index == 0 ? (
            <Link href={ConvertPath(item.title)}>
              <div className={styles["new-card"]}>
                <img alt="example" src={item.image} />
                <p className={styles["title"]}>{item.title}</p>
                <p className={styles["text-timer"]}>{item.timer}</p>
              </div>
            </Link>
          ) : (
            <Link href={ConvertPath(item.title)}>
              <div className={styles["new-card"]}>
                <p className={styles["description"]}>{item.title}</p>
                <p className={styles["text-timer"]}>{item.timer}</p>
              </div>
            </Link>
          )}
          <Divider />
        </>
      ))}
    </Col>
  );
};

export default WatchMoreInfo;
