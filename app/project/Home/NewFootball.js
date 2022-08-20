import { dataSport } from "@function/constant";
import { Col, Row } from "antd";
import { ConvertPath } from "helpers/functions";
import Link from "next/link";
import React from "react";
import styles from "../../../styles/Home.module.css";



const NewFootball = () => {
  return (
    <>
      <h2 className="title-heading">
        <Link href={"/bong-da"}>Bóng đá</Link>
      </h2>
      <Row gutter={{ xs: 0, md: 16 }}>
        {dataSport.map((item, index) => (
          <Col md={6} key={index}>
            <div className={styles["new-card-item"]}>
              <Link href={ConvertPath(item.title)}>
              <div className="new-card-item-hidden">
                <img
                  alt="example"
                  src={item.image}
                  width="288px"
                  height="162px"
                />
                </div>
              </Link>
              <Link href={ConvertPath(item.title)} className={styles["title"]}>
                {item.title}
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default NewFootball;
