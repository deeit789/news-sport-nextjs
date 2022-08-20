import React from "react";
import Link from "next/link";
import { Row, Col } from "antd";
import styles from "../../../styles/Home.module.css";
import { ConvertPath } from "../../../helpers/functions";
import { data } from "@function/constant";


const ListBackstage = () => {
  return (
    <>
      <h2 className="title-heading">
        <Link href={"/hau-truong"}>Hậu trường</Link>
      </h2>
      <Row style={{ background: "#e8eaef" }} gutter={10}>
        <Col md={16}>
          <Link href={ConvertPath(data[0].title)}>
          <div className="new-card-item-hiddenfull">
            <img alt="image web sports" src={data[0].image} />
            </div>
          </Link>
        </Col>
        <Col md={8}>
          <Link href={ConvertPath(data[0].title)}>
            <p className={styles["title"]}>{data[0].title}</p>
          </Link>
          <p style={{ color: "#4f4f4f" }}>{data[0].description}</p>
        </Col>
      </Row>
      <Row gutter={10} style={{ marginTop: "16px !important" }}>
        {data.slice(0, 3).map((item, index) => (
          <Col  span={8} key={index}>
            <Link href={ConvertPath(item.title)}>
              <div className={styles["new-card-item"]}>
                <div className="new-card-item-hidden">
                <img
                  alt="example"
                  src={item.image}
                  width="288px"
                  height="162px"
                />
                </div>
                <p className={styles["title"]}>{item.title}</p>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ListBackstage;
