import { maxLengthText } from "@function";
import { Col, Divider, Row } from "antd";
import Link from "next/link";
import React from "react";
import { ConvertPath } from "../../../helpers/functions";
import styles from "../../../styles/Home.module.css";


const Newfeed = ({ listSportInfo }) => {
  return (
    <>
      <h2 className="title-heading">
        <Link href={"/tin-the-thao"}>Tin mới nhất</Link>
      </h2>
      <Row gutter={16}>
        <Col md={10} sm={24} xs={24}>
          <div className={styles["new-card"]}>
            <Link href={ConvertPath(listSportInfo[0].title)}>
              <div className="new-card-item-hiddenfull">
                <img
                  alt="example"
                  src={listSportInfo[0].image}
                  width="387px"
                  height={"217px"}
                />
              </div>
            </Link>
            <Link href={ConvertPath(listSportInfo[0].title)}>
              <p className={styles["title"]}>
                {maxLengthText(listSportInfo[0].title, 40)}
              </p>
            </Link>
            <p className="description">{listSportInfo[0].description}</p>
          </div>
        </Col>
        <Col md={14} sm={24}>
          {listSportInfo.slice(1, 4).map((item, index) => (
            <>
              <div key={index} className={styles["new-news"]}>
                <Link
                  href={ConvertPath(item.title)}
                  className={styles["title"]}
                >
                  {maxLengthText(item.title, 80)}
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
                    <p>{maxLengthText(item.description, 200)}</p>
                  </Col>
                </Row>
              </div>
              <Divider style={{ margin: "15px 0px" }} />
            </>
          ))}
        </Col>
      </Row>
    </>
  );
};

export default Newfeed;
