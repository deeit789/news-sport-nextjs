import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Row, Col, Divider } from "antd";
import styles from "../../../styles/Home.module.css";
import { ConvertPath } from "../../../helpers/functions";

const TransferInfo = ({ listTransfer }) => {
  return (
    <>
      <h2 className="title-heading">
        <Link href={"/chuyen-nhuong"}>Thông tin chuyển nhượng</Link>
      </h2>
      {listTransfer.slice(0, 5).map((item, index) => (
        <>
          <div key={index} className={styles["new-news"]}>
            <Row className={styles["news-content"]} gutter={10}>
              <Col md={8}>
                <Link href={ConvertPath(item.title)}>
                  <div className="new-card-item-hiddenfull">
                    <img
                      alt="image web sports"
                      src={item.image}
                      width="140px"
                      height="80px"
                    />
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
