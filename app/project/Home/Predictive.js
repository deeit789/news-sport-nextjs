import React from "react";
import Link from "next/link";
import { Row, Col, Card } from "antd";
import styles from "../../../styles/Home.module.css";
import { ConvertPath } from "../../../helpers/functions";

const { Meta } = Card;

const data = [
  {
    image:
      "https://vncdn.sabasports.com/2022/08/Nhan-dinh-Liverpool-vs-Crystal-Palace-01.jpg",
    title:
      "Nhận định Liverpool vs Crystal Palace (02h00 ngày 16/08): Lữ đoàn đỏ gặp thêm một thử thách khó",
  },
  {
    image:
      "https://vncdn.sabasports.com/2022/08/Nhan-dinh-Liverpool-vs-Crystal-Palace-01.jpg",
    title:
      "Nhận định Liverpool vs Crystal Palace (02h00 ngày 16/08): Lữ đoàn đỏ gặp thêm một thử thách khó",
  },
  {
    image:
      "https://vncdn.sabasports.com/2022/08/Nhan-dinh-Liverpool-vs-Crystal-Palace-01.jpg",
    title:
      "Nhận định Liverpool vs Crystal Palace (02h00 ngày 16/08): Lữ đoàn đỏ gặp thêm một thử thách khó",
  },
  {
    image:
      "https://vncdn.sabasports.com/2022/08/Nhan-dinh-Liverpool-vs-Crystal-Palace-01.jpg",
    title:
      "Nhận định Liverpool vs Crystal Palace (02h00 ngày 16/08): Lữ đoàn đỏ gặp thêm một thử thách khó",
  },
  {
    image:
      "https://vncdn.sabasports.com/2022/08/Nhan-dinh-Liverpool-vs-Crystal-Palace-01.jpg",
    title:
      "Nhận định Liverpool vs Crystal Palace (02h00 ngày 16/08): Lữ đoàn đỏ gặp thêm một thử thách khó",
  },
  {
    image:
      "https://vncdn.sabasports.com/2022/08/Nhan-dinh-Liverpool-vs-Crystal-Palace-01.jpg",
    title:
      "Nhận định Liverpool vs Crystal Palace (02h00 ngày 16/08): Lữ đoàn đỏ gặp thêm một thử thách khó",
  },
  {
    image:
      "https://vncdn.sabasports.com/2022/08/Nhan-dinh-Liverpool-vs-Crystal-Palace-01.jpg",
    title:
      "Nhận định Liverpool vs Crystal Palace (02h00 ngày 16/08): Lữ đoàn đỏ gặp thêm một thử thách khó",
  },
  {
    image: "https://vncdn.sabasports.com/2022/08/Fofana-kho-chiu.jpg",
    title:
      "Nhận định Liverpool vs Crystal Palace (02h00 ngày 16/08): Lữ đoàn đỏ gặp thêm một thử thách khó",
  },
];

const Predictive = () => {
  return (
    <div className={styles["container-fluid"]}>
      <div className="container-content">
        <h2 className={styles["heading"]}>
          <Link href={"/nhan-dinh-bong-da"}>Nhận định dự đoán</Link>
        </h2>
        <Row gutter={10} style={{ marginTop: "16px" }}>
          {data.slice(0, 3).map((item, index) => (
            <Col span={8} key={index}>
              <Link href={ConvertPath(item.title)}>
                <div className={styles["new-card-item"]}>
                <div className="new-card-item-hidden">
                  <img alt="example" src={item.image} />
                  </div>
                  <p
                    className={styles["title-white"]}
                  >
                    {item.title}
                  </p>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Predictive;
