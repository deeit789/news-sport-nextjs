import React from "react";
import Link from "next/link";
import { Row, Col, Card, List, Divider } from "antd";
import styles from "../../../styles/Home.module.css";
import { ConvertPath } from "../../../helpers/functions";
import { maxLengthText } from "@function";
import { data, title } from "@function/constant";

const { Meta } = Card;


const Newfeed = () => {
  return (
    <>
      <h2 className="title-heading">
        <Link href={"/tin-the-thao"}>Tin mới nhất</Link>
      </h2>
      <Row gutter={16}>
        <Col md={10} sm={24} xs={24}>
          <div className={styles["new-card"]}>
            <Link href={ConvertPath("Fofana khó chịu vì không được ra đi")}>
            <div  className="new-card-item-hiddenfull">
              <img
                alt="example"
                src="https://vncdn.sabasports.com/2022/08/Fofana-kho-chiu.jpg"
                width="387px"
                height={"217px"}
              />
              </div>
            </Link>
            <Link href={ConvertPath("Fofana khó chịu vì không được ra đi")}>
              <p className={styles["title"]}>
              {maxLengthText(title,40)}
              </p>
            </Link>
            <p className="description">
              Hậu vệ của Leicester hiện đang cảm thấy bức rức bởi đội nhà không
              muốn bán anh cho Chelsea.
            </p>
          </div>
        </Col>
        <Col md={14}  sm={24}>
          {data.slice(0, 3).map((item, index) => (
            <>
              <div key={index} className={styles["new-news"]}>
                <Link
                  href={ConvertPath(item.title)}
                  className={styles["title"]}
                >
                  {maxLengthText(item.title,80)}
                </Link>
                <Row className={styles["news-content"]}>
                  <Col md={4}>
                    <Link
                      href={ConvertPath(item.title)}
                      className={styles["title"]}
                    >
                         <div className="new-card-item-hidden">
                      <img alt="image web sports" src={item.image} />
                      </div>
                    </Link>
                  </Col>
                  <Col md={20}>
                    <p>{maxLengthText(item.description,200)}</p>
                  </Col>
                </Row>
              </div>
              <Divider style={{margin:'15px 0px'}} />
            </>
          ))}
        </Col>
      </Row>
    </>
  );
};

export default Newfeed;
