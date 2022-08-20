import React from "react";
import Link from "next/link";
import { Row, Col } from "antd";
import styles from "../../../styles/Home.module.css";
import { ConvertPath } from "../../../helpers/functions";
import { dataPredic } from "@function/constant";




const Predictive = () => {
  return (
    <div className={styles["container-fluid"]}>
      <div className="container-content">
        <h2 className={styles["heading"]}>
          <Link href={"/nhan-dinh-bong-da"}>Nhận định dự đoán</Link>
        </h2>
        <Row gutter={10} style={{ marginTop: "16px" }}>
          {dataPredic.slice(0, 3).map((item, index) => (
            <Col span={8} key={index}>
              <Link href={ConvertPath(item.title)}>
                <div className={styles["new-card-item"]}>
                <div className="new-card-item-hidden">
                  <img alt="image web sports" src={item.image} />
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
