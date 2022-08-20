import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Row, Col, Card, List, Divider } from "antd";
import styles from "../../../styles/Home.module.css";
import { ConvertPath } from "../../../helpers/functions";

const { Meta } = Card;

const data = [
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

const TransferInfo = () => {
  return (
    <>
      <h2 className="title-heading">
        <Link href={"/chuyen-nhuong"}>Thông tin chuyển nhượng</Link>
      </h2>
      {data.slice(0, 5).map((item, index) => (
        <>
          <div key={index} className={styles["new-news"]}>
            <Row className={styles["news-content"]} gutter={10}>
              <Col md={8}>
                <Link href={ConvertPath(item.title)}>
                <div className="new-card-item-hiddenfull"> 
                <img src={item.image} width="140px" height="80px" />
                </div>
                 
                </Link>
              </Col>
              <Col md={16}>
                <Link href={ConvertPath(item.title)}>
                  <p className={styles["title"]} style={{ marginLeft: 0 }}>
                    {item.title}
                  </p>
                </Link>
              </Col>
            </Row>
          </div>
          <Divider />
        </>
      ))}
    </>
  );
};

export default TransferInfo;
