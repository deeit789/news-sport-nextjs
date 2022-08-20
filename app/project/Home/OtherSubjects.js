import React from "react";
import Link from "next/link";
import { Row, Col, Card } from "antd";
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

const OtherSubjects = () => {
  return (
    <>
      <h2 className="title-heading">
        <Link href={"/cac-mon-khac"}>Các môn khác</Link>
      </h2>
      <Row gutter={10}>
        <Col md={12}>
          <Link
            href={ConvertPath(
              "Kết thúc vòng bảng LEC Hè 2022: Super Team bị loại"
            )}
          >
            <div>
              <Link
                href={ConvertPath(
                  "Kết thúc vòng bảng LEC Hè 2022: Super Team bị loại"
                )}
              >
                <>
                  <img src="https://vncdn.sabasports.com/2022/08/vong-bang-LEC-He-2022.jpg" />
                  <p className={styles["title"]}>
                    Kết thúc vòng bảng LEC Hè 2022: Super Team bị loại
                  </p>
                </>
              </Link>
            </div>
          </Link>
        </Col>
        <Col md={12}>
          <Row gutter={10}>
            {data.slice(0, 4).map((item, index) => (
              <Col md={12} key={index} style={{ marginBottom: 10 }}>
                <Link href={ConvertPath(item.title)}>
                  <div className={styles["new-card-item"]}>
                  <div className="new-card-item-hidden">
                    <img alt="example" src={item.image} />
                    </div>
                    <p className={styles["title"]}>{item.title}</p>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default OtherSubjects;
