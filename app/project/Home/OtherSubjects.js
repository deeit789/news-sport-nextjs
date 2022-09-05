import React from "react";
import Link from "next/link";
import { Row, Col } from "antd";
import styles from "../../../styles/Home.module.css";
import { ConvertPath } from "../../../helpers/functions";

const OtherSubjects = ({ listOtherSubject }) => {
  return (
    <>
      <h2 className="title-heading">
        <Link href={"/cac-mon-khac"}>Các môn khác</Link>
      </h2>
      <Row gutter={10}>
        <Col md={12}>
          <Link href={ConvertPath(listOtherSubject[3].title)}>
            <div>
              <Link href={ConvertPath(listOtherSubject[3].title)}>
                <>
                  <img alt="image web sports" src={listOtherSubject[3].image} />
                  <p className={styles["title"]}>{listOtherSubject[3].title}</p>
                </>
              </Link>
            </div>
          </Link>
        </Col>
        <Col md={12}>
          <Row gutter={10}>
            {listOtherSubject.slice(4, 8).map((item, index) => (
              <Col md={12} key={index} style={{ marginBottom: 10 }}>
                <Link href={ConvertPath(item.title)}>
                  <div className={styles["new-card-item"]}>
                    <div className="new-card-item-hidden">
                      <img alt="image web sports" src={item.image} />
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
